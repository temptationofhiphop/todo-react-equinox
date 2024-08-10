import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import { nanoid } from "nanoid";
import "../TodoContainerStyle.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = {
      id: nanoid(),
      task: todo,
      finished: false,
      createdAt: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finished: !todo.finished } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo)),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "finished":
        return todo.finished;
      case "active":
        return !todo.finished;
      case "all":
      default:
        return true;
    }
  });

  return (
    <div className="todo-container">
      <img
        src={`${process.env.PUBLIC_URL}/img/dodo.png`}
        alt="Dodo Logo"
        className="logo"
      />
      <h1>
        <span className="dodo-text">Dodo</span> App
      </h1>

      <TodoForm addTodo={addTodo} />

      <div className="filter-container">
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="active">Active</option>
        </select>
      </div>

      {filteredTodos.map((todo) => (
        <TodoCard
          task={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoContainer;
