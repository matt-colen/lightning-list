import styles from "./Input.module.css";

export default function Input({
  input,
  inputError,
  inputRef,
  handleInputChange,
  handleAddClick,
  children,
}) {
  const handleKeyDown = (e) => {
    e.key === "Enter" && handleAddClick();
  };

  return (
    <>
      <input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
        type="text"
        placeholder={children}
        value={input}
        ref={inputRef}
      />
      {inputError && (
        <p className={styles.error}>Please enter a new task to create</p>
      )}
    </>
  );
}
