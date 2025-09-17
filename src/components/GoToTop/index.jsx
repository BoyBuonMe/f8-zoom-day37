import { useEffect, useState } from "react";
import styles from "./GoToTop.module.scss";

export default function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY >= 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    document.addEventListener("scroll", handleScrollY);

    return () => {
      document.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const handleOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`${styles.wrapper} ${show ? styles.show : ""}`}
        onClick={handleOnTop}
      >
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="currentColor"
        >
          <path d="M297.4 41.4C309.9 28.9 330.2 28.9 342.7 41.4L470.7 169.4C479.9 178.6 482.6 192.3 477.6 204.3C472.6 216.3 460.9 224 448 224L384 224L384 560C384 586.5 362.5 608 336 608L304 608C277.5 608 256 586.5 256 560L256 224L192 224C179.1 224 167.4 216.2 162.4 204.2C157.4 192.2 160.2 178.5 169.4 169.4L297.4 41.4z" />
        </svg>
      </div>
    </>
  );
}
