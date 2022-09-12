import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.global_title}>
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className={styles.contact}>
        <div className={styles.inputs}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" className={styles.message} />
          <input className={styles.button} type="submit" value="Submit" />
        </div>
      </div>
    </>
  );
};

export default Contact;
