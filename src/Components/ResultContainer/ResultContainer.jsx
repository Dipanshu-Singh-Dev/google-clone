import React from "react";
import styles from "./ResultContainer.module.css";
const ResultContainer = ({ link, displayLink, title, snippet }) => {
  return (
    <div className={styles.container}>
      <p className={styles.link}>{displayLink}</p>
      <a href={link} className={styles.anchor}>
        {title}
      </a>
      <p className={styles.snippet}>{snippet}</p>
    </div>
  );
};

export default ResultContainer;
