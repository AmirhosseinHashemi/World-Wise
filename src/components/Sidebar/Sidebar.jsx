import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../AppNav/AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
