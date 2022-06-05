import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";


function TaskList({ tasks, setTasks, selectedCategory }) {
  let tasksToDisplay = [...tasks];
  if (selectedCategory !== 'All') {
    tasksToDisplay = tasks.filter(task => task.category === selectedCategory ? true : false)
  }
  function onDelete(taskToDel) {
    const deletedTask = tasks.filter(task => task.text !== taskToDel.text ? true : false
    );
    setTasks(deletedTask);
  }
  return (
    <div className="tasks">
      {tasksToDisplay.map(task => {
        return <Task onDelete={onDelete} task = {task} text={task.text} category = {task.category} key={uuid()} />
      }
      )}
    </div>
  );
}

export default TaskList;