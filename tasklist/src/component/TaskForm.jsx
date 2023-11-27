// TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask({ text: inputValue, completed: false });
      setInputValue('');
    } else {
      alert('Ingrese una tarea!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;
