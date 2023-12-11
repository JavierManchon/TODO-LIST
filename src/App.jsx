import './App.css';
import Header from './Header/Header';
import Input from './Input/Input';
import React, {useState} from "react";
import Task from './Task/Task';

const baseTasks = [
  { task: "Comprar harina, jamón y pan rallado", completed: true },
  { task: "Hacer croquetas", completed: true },
  { task: "Ir al gimnasio", completed: false },
  { task: "estudiar React", completed: false },
  { task: "Irme a vivir a Bali", completed: false },
];

function App() {
  const [savedTasks, setSavedTasks] = useState(baseTasks);

  function addTask({task}) {
    const savedTask = { task: task, completed: false };
    const newTaskList = [...savedTasks, savedTask];
    setSavedTasks(newTaskList);
  }

  return (
    <div className="App">
      <Header />
      <div className="task-list">
        <Input addTask={addTask} />
        <Task savedTasks={savedTasks} setSavedTasks={setSavedTasks} />
      </div>
    </div>
  );
}

export default App;
