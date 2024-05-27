import { useState, useEffect } from "react";

import { fetchImagesWithName } from "../../images-api.js";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function fetchArticles() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithName(query, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [page, query]);

  const handleSearch = async (input) => {
    setImages([]);
    setQuery(input);
    setPage(1);
  };

  const handleModal = async (data) => {
    setIsModal(true);
    setModalData(data);
  };
  const handleCloseModal = async () => {
    setIsModal(false);
    setModalData([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <main className={css.container}>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} onModal={handleModal} />
        )}
        {images.length > 5 && (
          <LoadMoreBtn onClick={handleLoadMore} disabled={loading} />
        )}
      </main>
      {isModal != false && (
        <ImageModal data={modalData} onClose={handleCloseModal} />
      )}
    </>
  );
}
