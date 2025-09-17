import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";

export default function Modal({
  isOpen = false,
  children,
  onRequestClose,
  onAfterOpen,
  onAfterClose,
  closeTimeoutMS = 0,
  overlayClassName,
  className,
  bodyOpenClassName,
  htmlOpenClassName,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
}) {
  
  useEffect(() => {
    const handleESC = (e) => {
      if (e.code === "Escape") {
        onRequestClose();
      }
    };

    if (isOpen) {
      onAfterOpen(); // Use onAfterOpen
      document.body.classList.add(bodyOpenClassName);
      document.body.classList.add(htmlOpenClassName);
      //   console.log("Class Body: ", document.body.className);
      if (shouldCloseOnEsc) {
        document.addEventListener("keydown", handleESC);
      }
    }

    return () => {
      document.body.classList.remove(bodyOpenClassName);
      document.body.classList.remove(htmlOpenClassName);
      //   console.log("Class Body: ", document.body.className);

      document.removeEventListener("keydown", handleESC);
    };
  }, [
    isOpen,
    onAfterOpen,
    bodyOpenClassName,
    htmlOpenClassName,
    onRequestClose,
    shouldCloseOnEsc,
  ]);

  const [isClosing, setIsClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      onRequestClose();
      setIsClosing(false)
    }, closeTimeoutMS);
  }

  const handleOverlayClick = () => {
    if (shouldCloseOnOverlayClick) {
      onRequestClose();
    }
  };

  if (!isOpen) return onAfterClose(); // Use onAfterClose (Có thể dùng trên useEffect luôn cũng được)

  const customOverlay = overlayClassName.trim().replace(/[^a-zA-Z0-9]/g, ""); // Xóa toàn bộ kí tự đặc biệt.

  const customModal = className.trim().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className={`${styles.modal} ${customModal}`}>
      <div className={`${styles.content} ${isClosing ? styles.closeContent : ""}`}>
        <button className={styles.closeBtnX} onClick={handleCloseModal}>
          &times;
        </button>

        {children}

        <button className={styles.closeBtn} onClick={handleCloseModal}>
          Đóng
        </button>
      </div>

      <div
        className={`${styles.overlay} ${isClosing ? styles.closeOverlay : ""} ${customOverlay}`}
        onClick={handleOverlayClick}
      ></div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  htmlOpenClassName: PropTypes.string,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
};
