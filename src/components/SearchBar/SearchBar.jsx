import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const error = () => toast.error("Do not leave an empty field!");

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;

    if (inputValue.length == 0) {
      error();
    } else {
      onSearch(inputValue);
    }
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} action="" onSubmit={handleSubmit}>
        <button type="submit" className={css.btn}>
          <IoIosSearch size="24" />
        </button>
        <input
          type="text"
          placeholder="Search for images here..."
          className={css.input}
          autoComplete="off"
          name="input"
        />
      </form>
    </div>
  );
}
