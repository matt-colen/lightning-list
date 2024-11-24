import styles from "./Btn.module.css";

export default function Btn({ children, onClick, type, id }) {
  return (
    <button
      onClick={onClick}
      data-id={id}
      className={`${styles.btn} ${type === "primary" ? styles.btnPrimary : ""}`}
    >
      {children}
    </button>
  );
}
