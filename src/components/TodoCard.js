import React from "react";

const TodoCard = ({ task }) => {
  return (
    <div className="todo-card">
      <p>{task.task}</p>
      <small>Created at: {task.createdAt}</small>
    </div>
  );
};

export default TodoCard;
