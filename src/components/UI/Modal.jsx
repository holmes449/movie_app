import styles from "./Modal.module.css";

function Modal({ onClick, children }) {
  return (
    <div className={styles.modal} onClick={onClick}>
      <div className={styles.box_modal}>{children}</div>
    </div>
  );
}

export default Modal;
