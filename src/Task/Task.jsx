import React from "react";
import "./Task.css";
import Done from "../Done/Done";
import Delete from "../Delete/Delete";

function Task({ savedTasks, setSavedTasks }) {
  function handleState(index) {
    //savedTasks[index].completed = !savedTasks[index].completed -- Mas simple que iterar en todo el array
    const updatedTasks = savedTasks.map((savedTask, i) => {
      if (i === index) {
        const updatedTask = {
          task: savedTask.task,
          completed: true,
        };
        return updatedTask;
      }
      return savedTask;
    });
    setSavedTasks(updatedTasks);
  }

  function handleDelete(index) {
    const updatedTask = savedTasks.filter((savedTask, i) => (i !== index));
    setSavedTasks(updatedTask);
  }

  return (
    <>
      {savedTasks.map((savedTask, index) => (
        <div key={index} className="task">
          <h3 className={savedTask.completed ? 'completed' : 'in-progress'}>
            {savedTask.task}
          </h3>
          <div className="actions">
            {!savedTask.completed ? <Done onClick={() => handleState(index)} /> : null}
            <Delete onClick={() => handleDelete(index)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;