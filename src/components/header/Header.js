import React, { useState } from "react";
import styles from "./Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const removeMenu = () => {
    setNav(false);
  };
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.heading}>
          <h1>Sajal</h1>
        </Link>
      </div>
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <Link onClick={removeMenu} to="/" className={styles.active}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={removeMenu} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={removeMenu} to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={removeMenu} to="/projects">
              Projects
            </Link>
          </li>

          <li>
            <Link onClick={removeMenu} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
