import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const storeValue = (e) => {
    setValue(e.target.value);
  };

  const saveValue = (e) => {
    e.preventDefault();

    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="todo-form" onSubmit={saveValue}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add your new TODO!"
        value={value}
        onChange={storeValue}
      />
      <button className="btn-submit" onClick={saveValue}>
        Create Task
      </button>
    </form>
  );
};

export default TodoForm;
