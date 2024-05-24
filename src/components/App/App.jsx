import { useState } from "react";

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
  const [modal, setModal] = useState(false);

  const handleSearch = async (input) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithName(input);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleModal = (data) => {
    setModal(data);
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
        <LoadMoreBtn />
      </main>
      {modal != false && <ImageModal data={modal} />}
    </>
  );
}
