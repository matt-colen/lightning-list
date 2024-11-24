import Task from "../Task/Task.jsx";

export default function TaskList({
  tasks,
  handleTaskEdit,
  handleDeleteClick,
  handleTaskCompletion,
}) {
  const taskElements = tasks.map((task) => {
    return (
      <li key={task.id} id={task.id} className="task flex">
        <Task
          task={task}
          handleTaskEdit={handleTaskEdit}
          handleDeleteClick={handleDeleteClick}
          handleTaskCompletion={handleTaskCompletion}
        />
      </li>
    );
  });

  return <ul className="task-list">{taskElements}</ul>;
}
