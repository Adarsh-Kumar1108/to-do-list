import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import '../styles/AddTask.css';


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description, completed: false };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    navigate('/');
  };

  return (
    <div className='add-container'>

      <div className="left">
               
        <div className="logo">
          <h3>TodoList Manager</h3>
        </div>

        <div className="left-item">
        <Link to="/add-task">
            <div className="additem">
              <i className="ri-file-add-fill"></i> Add Task
            </div>
          </Link>

          <Link to="/">
            <div className="today">
              <i className="ri-calendar-todo-fill"></i> Today
            </div>
          </Link>
        </div>

      </div>

      <div className="right">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      </div>
    </div>
  );
};

export default AddTask;
