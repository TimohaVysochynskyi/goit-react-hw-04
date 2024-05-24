import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn() {
  return (
    <div className={css.container}>
      <button type="button" className={css.btn}>
        Load more
      </button>
    </div>
  );
}
