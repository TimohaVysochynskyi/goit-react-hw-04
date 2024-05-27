import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.item} key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
