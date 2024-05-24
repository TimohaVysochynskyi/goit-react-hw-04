import css from "./ImageCard.module.css";

export default function ImageCard({
  image,
  image: {
    urls: { small },
    user: { first_name, last_name },
    likes,
    created_at,
  },
  onModal,
}) {
  const handleClick = (image) => {
    onModal(image);
  };

  return (
    <div className={css.container} onClick={() => handleClick(image)}>
      <img className={css.image} src={small} alt="Image" />
      <div className={css.description}>
        <p className={css.text}>{`${first_name} ${last_name}`}</p>
        <p className={css.text}>{likes}</p>
        <span className={css.date}>{created_at}</span>
      </div>
    </div>
  );
}
