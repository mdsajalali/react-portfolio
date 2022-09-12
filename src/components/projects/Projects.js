import React from "react";
import styles from "./Projects.module.css";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";

const Projects = () => {
  return (
    <>
      <div className={styles.global_title}>
        <h2>
          My <span>Project</span>
        </h2>
      </div>

      <div className={styles.projects}>
        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user1} alt="" />
            <p>Project - 01</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user2} alt="" />
            <p>Project - 02</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user3} alt="" />
            <p>Project - 03</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user1} alt="" />
            <p>Project - 04</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user2} alt="" />
            <p>Project - 05</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user3} alt="" />
            <p>Project - 06</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user1} alt="" />
            <p>Project - 07</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_card}>
            <img src={user3} alt="" />
            <p>Project - 08</p>
            <button>Visit Project</button>
            <button>Project Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
