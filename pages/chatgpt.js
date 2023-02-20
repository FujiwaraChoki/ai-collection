import { useEffect, useState } from "react";
import styles from "../styles/ChatGPT.module.css";

export default function ChatGPT() {
  const [apiKey, setApiKey] = useState("");
  const [gptResponse, setGptResponse] = useState("");

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    console.log("API-Key: " + apiKey);
    setApiKey(apiKey);
  }, []);

  if (apiKey) {
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>ChatGPT</h1>
        <form
          className={styles.form}
          method={"POST"}
          onSubmit={(e) => {
            e.preventDefault();
            const textPrompt = e.target.textPrompt.value;
            fetch("http://localhost:3000/api/gen", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt: textPrompt,
                apiKey: apiKey,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                const gptResponse = data.gpt_response;
                setGptResponse(gptResponse);
              });
          }}
        >
          <label htmlFor="textPrompt" className={styles.label}>
            Text Prompt:
          </label>
          <input
            type="text"
            id="textPrompt"
            name="textPrompt"
            className={styles.textPrompt}
          />
          <input type="submit" value="Submit" className={styles.button} />
        </form>
        <div id="gptResponse" className={styles.gptResponse}>
          {gptResponse}
        </div>
      </div>
    );
  } else if (apiKey === "") {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("apiKey") === null) {
        window.location.href = "/key";
      }
    }
    return null;
  } else {
    // Return error message
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>ChatGPT</h1>
        <p className={styles.error}>Error: API-Key is invalid.</p>
      </div>
    );
  }
}
