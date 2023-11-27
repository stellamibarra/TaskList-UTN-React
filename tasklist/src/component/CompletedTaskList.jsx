import React from 'react';
import './CompletedTaskList.css';

const CompletedTaskList = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <ul>
      {completedTasks.map((task, index) => (
        <li key={index}>
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default CompletedTaskList;