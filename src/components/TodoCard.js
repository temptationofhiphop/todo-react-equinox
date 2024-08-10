import React, { useState } from "react";

const TodoCard = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [edited, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    editTodo(task.id, newTask);
  };

  return (
    <div
      className="todo-card"
      style={{
        background: task.finished
          ? "linear-gradient(to right, #50C878, #7FFFD4)"
          : "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={task.finished}
        onChange={() => toggleComplete(task.id)}
        style={{ marginRight: "10px" }}
      />
      {edited ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onBlur={handleSave}
          className="todo-edit-input"
        />
      ) : (
        <p style={{ margin: 0 }}>{task.task}</p>
      )}
      <small>Created at: {task.createdAt}</small>
      {edited ? (
        <button onClick={handleSave}>
          <i className="fas fa-check" style={{ color: "green" }}></i>
        </button>
      ) : (
        <button onClick={handleEdit}>
          <i className="fas fa-pencil-alt" style={{ color: "gray" }}></i>
        </button>
      )}
      <button onClick={() => deleteTodo(task.id)}>
        <i className="fas fa-trash" style={{ color: "red" }}></i>
      </button>
    </div>
  );
};

export default TodoCard;
