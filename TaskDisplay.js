// TaskDisplay.js

import React from 'react';

const TaskDisplay = ({ tasks, deleteTask }) => {
  const listItemStyle = {
    backgroundColor: '#ffffff',
  border: '1px solid #dee2e6',
  borderRadius: '4px',
  padding: '8px',
  margin: '8px 0',  // Adjust the vertical margin, you can change '8px' based on your preference
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '-28px',
  };

  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    color: '#ffffff',
    border: '1px solid #dc3545',
    borderRadius: '4px',
    padding: '4px 8px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2 className="text-center"></h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="font-weight-bold">Low Priority </h3>
            <ul>
              {tasks
                .filter((task) => task.priority === 'Low')
                .map((task, index) => (
                  <li key={index} style={listItemStyle}>
                    <span style={{ color: '#000000' }}>{task.task}</span>
                    <button style={removeButtonStyle} onClick={() => deleteTask(index)}>
                      Remove
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col">
            <h3 className="font-weight-bold">Medium Priority </h3>
            <ul>
              {tasks
                .filter((task) => task.priority === 'Medium')
                .map((task, index) => (
                  <li key={index} style={listItemStyle}>
                    <span style={{ color: '#000000' }}>{task.task}</span>
                    <button style={removeButtonStyle} onClick={() => deleteTask(index)}>
                      Remove
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col">
            <h3 className="font-weight-bold">High Priority </h3>
            <ul>
              {tasks
                .filter((task) => task.priority === 'High')
                .map((task, index) => (
                  <li key={index} style={listItemStyle}>
                    <span style={{ color: '#000000' }}>{task.task}</span>
                    <button style={removeButtonStyle} onClick={() => deleteTask(index)}>
                      Remove
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDisplay;
