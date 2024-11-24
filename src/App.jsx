import React from "react";
import { nanoid } from "nanoid";
import Task from "./components/Task/Task.jsx";
import Header from "./components/Header/Header.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";
import Filter from "./components/Filter/Filter.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import "./App.css";

export default function App() {
  const [input, setInput] = React.useState("");
  const [inputError, setInputError] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  const inputRef = React.useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleAddClick = () => {
    if (input) {
      setInputError(false);
      tasks.push({
        id: nanoid(),
        task: input,
        complete: false,
      });
      setInput("");
      focusInput();
    } else {
      setInputError(true);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTaskCompletion = (e) => {
    const { id } = e.target.dataset;
    setTasks((prev) => {
      const updatedTasks = prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else {
          return task;
        }
      });
      return updatedTasks;
    });
  };

  const handleTaskEdit = (e) => {
    const { value } = e.target;
    const { id } = e.target.dataset;
    setTasks((prev) => {
      const updatedTasks = prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            task: value,
          };
        } else {
          return task;
        }
      });
      return updatedTasks;
    });
  };

  const handleDeleteClick = (e) => {
    const { id } = e.target.dataset;
    setTasks((prev) => {
      const targetIndex = prev.findIndex((task) => task.id === id);
      const updatedTasks = [...prev];
      updatedTasks.splice(targetIndex, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="container flex-col">
      <Header>Lightning List</Header>
      <AddTask
        handleAddClick={handleAddClick}
        input={input}
        inputError={inputError}
        handleInputChange={handleInputChange}
        inputRef={inputRef}
      />
      <Filter />
      <TaskList
        tasks={tasks}
        handleTaskEdit={handleTaskEdit}
        handleDeleteClick={handleDeleteClick}
        handleTaskCompletion={handleTaskCompletion}
      />
    </div>
  );
}
