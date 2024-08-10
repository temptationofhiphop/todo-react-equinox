import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const storeValue = (e) => {
    setValue(e.target.value);
  };

  const saveValue = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={saveValue}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter"
        value={value}
        onChange={storeValue}
      />
      <button className="btn-submit">Create Task</button>
    </form>
  );
};

export default TodoForm;
