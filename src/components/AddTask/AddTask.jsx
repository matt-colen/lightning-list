import Input from "../Input/Input.jsx";
import Btn from "../Btn/Btn.jsx";
import styles from "./AddTask.module.css";

export default function AddTask({
  input,
  inputError,
  inputRef,
  handleInputChange,
  handleAddClick,
}) {
  return (
    <div className={`${styles.addTask} flex-col`}>
      <Input
        input={input}
        inputError={inputError}
        handleInputChange={handleInputChange}
        inputRef={inputRef}
        handleAddClick={handleAddClick}
      >
        Add a new task
      </Input>
      <Btn type="primary" task="add" onClick={handleAddClick}>
        Add
      </Btn>
    </div>
  );
}
