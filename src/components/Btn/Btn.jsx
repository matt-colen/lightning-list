import styles from './Btn.module.css'

export default function Btn({ type, task, children, handleAddClick }) {
  return (
    <button
      onClick={task === "add" ? handleAddClick : () => {}}
      className={`${styles.btn} ${type === "primary" ? styles.btnPrimary : ""}`}
    >
      {children}
    </button>
  );
}
