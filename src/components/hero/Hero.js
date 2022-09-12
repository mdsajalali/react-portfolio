import React from "react";
import styles from "./Hero.module.css";
import Logo from "../../images/01.png"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_card}>
        <h2>Hello, I'm</h2>
        <h1>Md. Sajal Ali</h1>
        <h3>Front-End Web Developer</h3>
        <p>
          I am a Frontend web Developer. I am a hardworking, <br /> enthusiastic
          learner and I am always looking for <br /> opportunities to learn new
          technologies.
        </p>
        <button className={styles.btn}>Download Resume</button>
      </div>
      <div className={styles.hero_img}>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
