import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import "../styles/TaskList.css";
import "remixicon/fonts/remixicon.css";

const TaskList = () => {
  const { state } = useContext(TaskContext);
  const [filter, setFilter] = useState("today"); // Default to "today"

  const filteredTasks =
    filter === "today"
      ? state.tasks.filter((task) => !task.completed) // Pending tasks
      : state.tasks.filter((task) => task.completed); // Completed tasks

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <h4>TodoList Manager</h4>
        </div>

        <div className="left-item">
          <Link to="/add-task">
            <div className="additem">
              <i className="ri-file-add-fill"></i> Add Task
            </div>
          </Link>
          <div
            className={`today ${filter === "today" ? "active" : ""}`}
            onClick={() => setFilter("today")}
          >
            <i className="ri-calendar-todo-fill"></i> Today
          </div>
          <div
            className={`completed ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            <i className="ri-line-chart-line"></i> Completed
          </div>
        </div>
      </div>

      <div className="right">
        <div className="table-container">
          {filteredTasks.length === 0 ? (
            <p className="no-tasks">No tasks to display</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td>
                      <i class="ri-checkbox-circle-fill"></i>
                      {task.title}
                    </td>
                    <td>{task.description || "No description available"}</td>
                    <td>{task.completed ? "Completed" : "Pending"}</td>
                    <td>
                      <Link to={`/edit-task/${task.id}`}>
                        <i className="ri-pencil-fill" title="Edit Task"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
