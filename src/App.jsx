import './App.css';
import Header from './Header/Header';
import Input from './Input/Input';
import React, {useState} from "react";
import Task from './Task/Task';

function App() {
  const [savedTasks, setSavedTasks] = useState([]);

  function addTask({savedTask}) {
    const newTasks = [...savedTasks, savedTask];
    setSavedTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <div className="task-list">
        <Input addTask={addTask} />
        <h2>Task List</h2>
        <Task savedTasks={savedTasks} />
      </div>
    </div>
  );
}

export default App;
