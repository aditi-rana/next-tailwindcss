// src/components/Sidebar.js
import Link from "next/link";
import styles from "../styles/layout.module.css";

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    {/* Add other links as needed */}
  </div>
);

export default Sidebar;
