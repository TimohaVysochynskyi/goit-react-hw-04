import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./App.module.css";

export default function App() {
  return (
    <main className={css.container}>
      <ErrorMessage />
    </main>
  );
}
