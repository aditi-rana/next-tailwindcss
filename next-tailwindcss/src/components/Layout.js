// src/components/Layout.js
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Sidebar />
    <div className={styles.mainContent}>
      <Navbar />
      <main className={styles.main}>{children}</main> {/* Add class here */}
      <Footer />
    </div>
  </div>
);

export default Layout;
