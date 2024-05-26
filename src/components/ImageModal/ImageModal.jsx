import css from "./ImageModal.module.css";

export default function ImageModal({
  data: {
    created_at,
    description,
    urls: { regular },
    likes,
    user: { name },
  },
}) {
  return <>{name}</>;
}
