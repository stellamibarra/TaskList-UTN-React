import React, { useState, useEffect } from 'react';
import TaskForm from './component/TaskForm.jsx';
import TaskList from './component/TaskList.jsx';
import CompletedTaskList from './component/CompletedTaskList.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    console.log('Tarea modificada:', updatedTasks[index]);

  };


  return (<>
    <header>
      <h1>Lista de Tareas</h1>
    </header>
    <div className='main'>

      <div className='container'>
        <p>¡Bienvenido a tu lista de tareas! 📝</p>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      </div>
      <aside>
        <h2>Tareas completadas</h2>
        <CompletedTaskList tasks={tasks} />
      </aside>
    </div>
  </>
  );
};

export default App;

