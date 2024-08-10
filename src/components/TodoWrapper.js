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
        console.log(todos);
    };

    return (
        <div className='todo-container'>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <TodoCard task={todo} key={index} />
            ))}
        </div>
    );
};

export default TodoWrapper;
