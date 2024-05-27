import Modal from "react-modal";

import css from "./ImageModal.module.css";
import { FcLike } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";

Modal.setAppElement("#modal");

export default function ImageModal({
  data: {
    created_at,
    description,
    urls: { regular },
    links: { download },
    likes,
    user: { name },
  },
  onClose,
}) {
  return (
    <div className={css.container} id="modal">
      <button type="button" className={css.cross} onClick={onClose}>
        <RxCross1 size="32" color="white" />
      </button>

      <div className={css.modal}>
        <div className={css.col}>
          <img src={regular} alt="Image" className={css.image} />
        </div>
        <div className={css.col}>
          <h2 className={css.title}>Some details:</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <span className={css.itemContent}>Created at: </span>
              <span className={css.itemContent}>{created_at}</span>
            </li>
            <li className={css.item}>
              <span className={css.itemContent}>Author: </span>
              <span className={css.itemContent}>{name}</span>
            </li>
            <li className={css.item}>
              <span className={css.itemContent}>Description: </span>
              <span className={css.itemContent}>
                {description != null ? description : "No description"}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.itemContent}>Likes: </span>
              <span className={css.itemContent}>
                {likes}
                <FcLike size="20" />
              </span>
            </li>
            <li className={css.item}>
              <span className={css.itemContent}>Download here: </span>
              <span className={css.itemContent}>
                <a href={download}>Click me</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
