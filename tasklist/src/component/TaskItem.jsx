// TaskItem.js
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, index, removeTask, toggleTask }) => {
  const handleRemove = () => {
    removeTask(index);
  };

  const handleToggle = () => {
    toggleTask(index);
  };

  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        onClick={handleToggle}
      >
        {task.text}
      </span>
      <button className='close' onClick={handleRemove}>
      &times; 
      </button>
    </li>
  );
};

export default TaskItem;
