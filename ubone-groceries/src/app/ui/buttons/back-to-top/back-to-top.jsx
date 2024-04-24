"use client";

import { UP } from "@/app/constants/icons";
import styles from "./top.module.css";

export default function Top() {
  
  const top = document.getElementById("Top");
  const sendToTop = () => {};
  return (
    <>
      <button onClick={sendToTop} id={styles.top}>
        <img src={UP} alt="Back to top" />
      </button>
    </>
  );
}
