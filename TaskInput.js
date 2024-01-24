// TaskInput.js

import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask({ task, priority });
      setTask('');
      setPriority('Low');
    }
  };
  return (
    <div className="container text-center " >
      <div className="row">
        <div className="col" style={{justifyContent:"start",display:"flex",flexDirection:"row",borderRadius:"none"}}>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
          />
       
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="form-control"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
        
          <button
            className="btn btn-primary"
            style={{ backgroundColor: '#007bff', color: '#ffffff' }}
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;