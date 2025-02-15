import React from "react";
import styles from "./page.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <ui className={styles.socialmedia}>
        <li>
          <img
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Lama Dev Facebook Account"
          />
          <img
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Lama Dev"
          />
        </li>
      </ui>
    </div>
  );
};

export default Footer;
