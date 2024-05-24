import css from "./ImageModal.module.css";

export default function ImageModal({
  data: {
    user: { first_name },
  },
}) {
  return <>{first_name}</>;
}
