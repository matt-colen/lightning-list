import styles from "./Btn.module.css";

export default function Btn({ children, onClick, type, id, className }) {
  return (
    <button
      onClick={onClick}
      data-id={id}
      className={`${styles.btn} ${
        type === "primary" ? styles.btnPrimary : className
      }`}
    >
      {children}
    </button>
  );
}
