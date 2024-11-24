import Input from "../Input/Input.jsx";
import Btn from "../Btn/Btn.jsx";
import styles from "./AddTask.module.css";

export default function AddTask({
  handleAddClick,
  input,
  inputError,
  inputRef,
  handleInputChange,
}) {
  return (
    <div className={`${styles.addTask} flex-col`}>
      <Input
        input={input}
        inputError={inputError}
        handleInputChange={handleInputChange}
        handleAddClick={handleAddClick}
        inputRef={inputRef}
      >
        Add a new task
      </Input>
      <Btn type="primary" task="add" handleAddClick={handleAddClick}>
        Add
      </Btn>
    </div>
  );
}
