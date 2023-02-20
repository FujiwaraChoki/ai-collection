import styles from "../styles/ReloadButton.module.css";

export default function resetApiKeyButton() {
  return (
    <button
      className={styles.reloadButton}
      onClick={() => {
        localStorage.removeItem("apiKey");
        window.location.reload();
      }}
    >
      Reset API-Key
    </button>
  );
}
