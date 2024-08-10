import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import { nanoid } from "nanoid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

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
        todo.id === id ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>Task List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoCard
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoContainer;
