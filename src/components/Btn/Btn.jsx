import styles from "./Btn.module.css";

export default function Btn({
  type,
  task,
  children,
  handleAddClick,
  onClick = () => {},
}) {
  return (
    <button
      onClick={task === "add" ? handleAddClick : onClick}
      className={`${styles.btn} ${type === "primary" ? styles.btnPrimary : ""}`}
    >
      {children}
    </button>
  );
}
