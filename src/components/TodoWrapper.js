import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';
import { nanoid } from 'nanoid';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const newTodo = {
            id: nanoid(),
            task: todo,
            finished: false,
            edited: false,
            createdAt: new Date().toLocaleString() 
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

    return (
        <div className='todo-container'>
            <h1>Task here</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <TodoCard task={todo} key={index} toggleComplete={toggleComplete} />
            ))}
        </div>
    );
};

export default TodoWrapper;
