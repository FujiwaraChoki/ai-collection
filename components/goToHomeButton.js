import styles from "../styles/ReloadButton.module.css";

export default function GoToHomeButton() {
  return (
    <button
      className={styles.reloadButton}
      onClick={() => {
        window.location.href = "/";
      }}
    >
      Home
    </button>
  );
}
