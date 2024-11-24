import Task from "../Task/Task.jsx";
import styles from "./TaskList.module.css";

export default function TaskList({
  tasks,
  handleTaskEdit,
  handleDeleteClick,
  handleTaskCompletion,
}) {
  const taskElements = tasks.map((task) => {
    return (
      <li key={task.id} id={task.id} className={`${styles.task} flex`}>
        <Task
          task={task}
          handleTaskEdit={handleTaskEdit}
          handleDeleteClick={handleDeleteClick}
          handleTaskCompletion={handleTaskCompletion}
        />
      </li>
    );
  });

  return <ul className={styles.taskList}>{taskElements}</ul>;
}
