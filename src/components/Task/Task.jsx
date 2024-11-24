import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Btn from "../Btn/Btn.jsx";
import styles from "./Task.module.css";

export default function Task({
  task,
  handleTaskEdit,
  handleDeleteClick,
  handleTaskCompletion,
}) {
  const subInputRef = React.useRef(null);

  const handleEditClick = () => {
    subInputRef.current.focus();
  };

  return (
    <>
      <div className={`${styles.taskText} flex`}>
        <input
          className={styles.taskCheckbox}
          data-id={task.id}
          onChange={handleTaskCompletion}
          type="checkbox"
          checked={task.complete}
        />
        <textarea
          data-id={task.id}
          className={`${task.complete && styles.taskChecked} ${
            styles.taskInput
          } flex`}
          value={task.task}
          onChange={handleTaskEdit}
          ref={subInputRef}
          rows="1"
        />
      </div>
      <div className={`${styles.taskBtns} flex`}>
        <Btn onClick={handleEditClick} data-id={task.id}>
          <MdOutlineEdit />
        </Btn>
        <Btn onClick={handleDeleteClick} data-id={task.id}>
          <MdDelete />
        </Btn>
      </div>
    </>
  );
}
