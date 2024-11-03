// src/components/Footer.js
import styles from "../styles/layout.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} My App</p>
  </footer>
);

export default Footer;
