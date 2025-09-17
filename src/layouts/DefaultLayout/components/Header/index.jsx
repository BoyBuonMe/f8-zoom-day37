import AppLogo from "../AppLogo";
import MySources from "../MySources";
import Notification from "../Notification";
import SearchForm from "../SearchForm";
import UserMenu from "../UserMenu";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <AppLogo />
      <SearchForm />
      <div className={styles.wrapper}>
        <MySources />
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
}
