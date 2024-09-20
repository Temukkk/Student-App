import React, { useState } from 'react';
import '../styles/ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() && tasks.length < 5) { // Check for max 5 tasks
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    } else if (tasks.length >= 5) {
      alert('You can only have up to 5 tasks.'); // Provide feedback to user
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <div className="input-container">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
