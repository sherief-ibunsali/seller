import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerPrimary}>
        <p className={styles.headerTitle}>
          World's Largest Medical Equipment Market Place
        </p>
        <p className={styles.headerContact}>
          <span className={styles.acc}>My account</span> |{" "}
          <span className={styles.contact}>Contact Us</span>
        </p>
      </div>
      <div className={styles.headerSecondary}>
        <div>
          <img
            src="https://1mdm.com/about/assets/1mdm-168x58.png"
            alt="logo"
          />
        </div>
        <button className={styles.toggleButton} onClick={toggleMenu}>
          ☰
        </button>
        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.ul}>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/story">Our Story</Link>
            </li>
            <li>
              <Link to="/">Sell on 1MDM</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
