import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.scss";
import Header from "./components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}><Outlet /></div>
    </>
  );
}
