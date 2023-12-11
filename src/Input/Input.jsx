import React, { useState } from 'react';

function Input(props) {
    const [task, setTask] = useState("");

    function submitInput(e) {
        e.preventDefault();

        if (!task) {
            console.log('Debes añadir una tarea');
            return;
        }

        props.addTask({savedTask: task});
        setTask("");
    };

    function handleInput(e) {
        setTask(e.target.value);
    }

    return (
        <form onSubmit={submitInput}>
            <input type="text" name="task" value={task} onChange={handleInput}/>
            <button type="submit">Add task</button>
        </form>
    )
}
export default Input;