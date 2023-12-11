import React, { useState } from 'react';
import "./Task.css";

function Task({ savedTasks }) {
    const [completedTasks, setCompletedTasks] = useState([]);

    function handleState(index) {
        const updatedCompletedTasks = [...completedTasks, index];
        setCompletedTasks(updatedCompletedTasks);
    }

    function isCompleted(index) {
        return completedTasks.includes(index);
    }

    return (
        <>
            {savedTasks.map((savedTask, index) => (
                <div key={JSON.stringify(savedTask)} className="task">
                    <h3 className={isCompleted(index) ? 'completed' : 'in-progress'}>
                        {savedTask}
                    </h3>
                    {!isCompleted(index) && (
                        <button onClick={() => handleState(index)}>Done!</button>
                    )}
                </div>
            ))}
        </>
    );
}

export default Task;