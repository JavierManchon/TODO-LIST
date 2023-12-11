import React from "react";
import "./Task.css";
import Done from "../Done/Done";

function Task({ savedTasks, setSavedTasks }) {
  function handleState(index) {
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

  return (
    <>
      {savedTasks.map((savedTask, index) => (
        <div key={index} className="task">
          <h3 className={savedTask.completed ? 'completed' : 'in-progress'}>
            {savedTask.task}
          </h3>
          {!savedTask.completed ? <Done onClick={() => handleState(index)} /> : null}
        </div>
      ))}
    </>
  );
}

export default Task;