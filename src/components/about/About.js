import React from "react";
import styles from "./About.module.css";
import myImg from "../../images/02.jpg";
import { FaGithub, FaLinkedin, FaCodepen, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className={styles.global_title}>
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <div className={styles.about_section}>
        <div className={styles.about_img}>
          <img src={myImg} alt="" />
        </div>
        <div className={styles.about_title}>
          <h1>
            Hi, Md. <span className={styles.name_title}>Sajal</span> Ali
          </h1>
          <p>
          I am a Frontend web Developer. I am a hardworking, <br /> enthusiastic
          learner and I am always looking for <br /> opportunities to learn new
          technologies.
        </p>
          <h2 className={styles.about_color}>
            Connect with <span>me</span>
          </h2>
          <div className={styles.social_link}>
            <FaGithub className={styles.link} />
            <FaLinkedin className={styles.link} />
            <FaCodepen className={styles.link} />
            <FaFacebook className={styles.link} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
