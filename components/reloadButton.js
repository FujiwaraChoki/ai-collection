import React from "react";
import styles from "../styles/ReloadButton.module.css";

export default function ReloadButton() {
  return (
    <button
      className={styles.reloadButton}
      onClick={() => {
        window.location.reload();
      }}
    >
      Reload
    </button>
  );
}
