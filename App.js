import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const t = task.trim();
    if (!t) return;
    setTodos(prev => [...prev, t]);
    setTask('');
  };

  const deleteTask = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className="app">
      <div className="card" role="region" aria-label="To do list">
        <div className="header">
          <div className="title">My To-Do List</div>
          <div className="counter">{todos.length} {todos.length === 1 ? 'item' : 'items'}</div>
        </div>

        <div className="input-row">
          <input
            className="input"
            type="text"
            placeholder="Add a new task and press Enter or Add"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Task input"
          />
          <button
            className="btn"
            onClick={addTask}
            disabled={!task.trim()}
            aria-label="Add task"
          >
            Add
          </button>
        </div>

        <ul className="list">
          {todos.length === 0 && <div className="empty">No tasks — add one!</div>}
          {todos.map((t, i) => (
            <li className="list-item" key={i}>
              <div className="item-text">{t}</div>
              <div className="item-actions">
                <button className="delete-btn" onClick={() => deleteTask(i)} aria-label={`Delete ${t}`}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
