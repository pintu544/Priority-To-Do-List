// App.js

import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskDisplay from './TaskDisplay';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Priority To-Do List App</h1>
      <TaskInput addTask={addTask} />
      <TaskDisplay tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
