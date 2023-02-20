import styles from "/styles/gpt.module.css";

export default function ChatGPT() {
  return (
    <div className={styles.main}>
      <h1>We ❤️ AI</h1>
      <form
        className={styles.form}
        method={"POST"}
        onSubmit={(e) => {
          e.preventDefault();
          const apiKey = e.target.apiKey.value;
          localStorage.setItem("apiKey", apiKey);

          window.location.href = "/";
        }}
      >
        <label htmlFor="apiKey">API-Key:</label>
        <input
          type="text"
          id="apiKey"
          name="apiKey"
          className={styles.apiKey}
        />
        <input type="submit" value="Submit" className={styles.button} />
      </form>
    </div>
  );
}
