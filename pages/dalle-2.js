import { useEffect, useState } from "react";
import styles from "../styles/ChatGPT.module.css";
import Image from "next/image";

export default function ChatGPT() {
  const [apiKey, setApiKey] = useState("");
  const [src, setSrc] = useState("");
  const [text, setText] = useState("");
  const [imageSize, setImageSize] = useState(0);

  const getImageSize = (size) => {
    if (size === "256x256") {
      return 256;
    } else if (size === "512x512") {
      return 512;
    } else if (size === "1024x1024") {
      return 1024;
    }
  };

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    console.log("API-Key: " + apiKey);
    setApiKey(apiKey);
  }, []);

  if (apiKey) {
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>Dalle 2</h1>
        <form
          className={styles.form}
          method={"POST"}
          onSubmit={(e) => {
            e.preventDefault();
            const textPrompt = e.target.textPrompt.value;
            const size = e.target.size.value;
            setImageSize(getImageSize(size));
            fetch("/api/img", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt: textPrompt,
                apiKey: apiKey,
                size: size,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                const response = data.dalle_response;
                setSrc(response.src);
                setText(response.text);
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
          <br />
          <label htmlFor="size" className={styles.label}>
            Image Size:
          </label>
          <select name="size" className={styles.select}>
            <option value="256x256">256</option>
            <option value="512x512">512</option>
            <option value="1024x1024">1024</option>
          </select>
          <br />
          <input type="submit" value="Submit" className={styles.button} />
        </form>
        <img src={src} alt={text} className={styles.dalleImage} />
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
        <h1 className={styles.title}>Dalle 2</h1>
        <p className={styles.error}>Error: API-Key is invalid.</p>
      </div>
    );
  }
}
