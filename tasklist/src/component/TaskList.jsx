// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, removeTask, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
