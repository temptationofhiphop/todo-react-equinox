import React, { useState } from "react";
import "../TodoCardStyle.css"; 

const TodoCard = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [edited, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    editTodo(task.id, newTask);
  };

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      deleteTodo(task.id);
    }, 500);
  };

  return (
    <div
      className={`todo-card ${isRemoving ? 'removing' : ''} ${task.finished ? 'finished' : ''}`}
    >
      <input
        type="checkbox"
        checked={task.finished}
        onChange={() => toggleComplete(task.id)}
        className="todo-checkbox"
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
        <p className="todo-task">{task.task}</p>
      )}
      <small>Created at: {task.createdAt}</small>
      {edited ? (
        <button onClick={handleSave} className="todo-button">
          <i className="fas fa-check green"></i>
        </button>
      ) : (
        <button onClick={handleEdit} className="todo-button">
          <i className="fas fa-pencil-alt gray"></i>
        </button>
      )}
      <button onClick={handleDelete} className="todo-button">
        <i className="fas fa-trash red"></i>
      </button>
    </div>
  );
};

export default TodoCard;
