import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import "../styles/EditTask.css";

const EditTask = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(TaskContext);
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundTask = state.tasks.find((t) => t.id.toString() === id);
    setTask(foundTask);
  }, [id, state.tasks]);

  const handleStatusChange = () => {
    const updatedTask = { ...task, completed: !task.completed };
    dispatch({ type: "EDIT_TASK", payload: updatedTask });
    navigate("/");
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="add-container">
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
        <div className="edit">
          <h1>Edit Task</h1>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.completed ? "Completed" : "Pending"}</p>
          <button onClick={handleStatusChange}>
            Mark as {task.completed ? "Pending" : "Completed"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
