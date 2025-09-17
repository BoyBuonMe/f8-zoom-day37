import styles from "./DropDown.module.scss";
import PropTypes from "prop-types";

export default function DropDown({ isOpen = false, children, className }) {
    
  if (!isOpen) return null;

  return (
    <>
      <div className={`${styles.drop} ${className || ""}`}>{children}</div>
      {/* <div className={styles.overlay} onClick={onRequestClose}></div> */}
    </>
  );
}

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  className: PropTypes.node,
};
