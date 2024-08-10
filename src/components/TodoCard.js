import React from "react";

const TodoCard = ({ task, toggleComplete }) => {
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
      <p style={{ margin: 0 }}>{task.task}</p>
      <small>Created at: {task.createdAt}</small>
    </div>
  );
};

export default TodoCard;
