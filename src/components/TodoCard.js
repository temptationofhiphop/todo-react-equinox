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
          ? "linear-gradient(to right, #7FFFD4, #088F8F)"
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
      <button onClick={handleEdit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path d="M12.146 0.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-4 1a.5.5 0 0 1-.637-.637l1-4a.5.5 0 0 1 .11-.168l10-10zM11.207 2l-9 9H2v1.793l9-9L11.207 2zM2 13h1.5v-1.5H2V13z"/>
        </svg>
      </button>
      <button onClick={() => deleteTodo(task.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </div>
  );
};

export default TodoCard;
