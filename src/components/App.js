import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;