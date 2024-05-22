import css from "./ImageCard.module.css";

export default function ImageCard() {
  return (
    <div className={css.container}>
      <img className={css.image} src="" alt="An image" />
      <div className={css.description}>
        <p className={css.text}>Description</p>
        <p className={css.text}>Author</p>
        <span className={css.date}>12.06.2024</span>
      </div>
    </div>
  );
}
