import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright 2022 - All right Reserved{" "}
        <a href="https://www.facebook.com/mdsajalali0/" target="_blank">
          Md. Sajal Ali
        </a>
      </p>
    </footer>
  );
};

export default Footer;
