import React from "react";
import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaGithubAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className={styles.global_title}>
        <h2>
          My <span>Skills</span>
        </h2>
      </div>
      <div className={styles.skills}>
        <FaHtml5 className={styles.link} />
        <FaCss3Alt className={styles.link} />
        <FaBootstrap className={styles.link} />
        <FaJs className={styles.link} />
        <FaReact className={styles.link} />
        <FaSass className={styles.link} />
        <FaGitAlt className={styles.link} />
        <FaGithubAlt className={styles.link} />
        <FaFigma className={styles.link} />
        <FaNode className={styles.link} />
      </div>
    </>
  );
};

export default Skills;
