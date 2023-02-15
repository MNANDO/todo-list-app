import React, { useState } from 'react'

function App() {
    // state variables 
    const [ todos, setTodos ] = useState([])
    const [ todo, setTodo ] = useState("")

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        };

        // add the todo to the todos array in state
        setTodos((prevTodos) => [
            ...prevTodos,
            newTodo 
        ]);

        // clear the input box 
        setTodo("");
    }


    const removeTodo = (todo) => {
        setTodos((prevTodos) => prevTodos.filter(prevTodo => prevTodo.id !== todo.id));
    }

    const setInput = e => setTodo(e.target.value);

    return (
        <div>
            <h1>Todo List App</h1>
            <input 
                type="text"
                value={todo}
                onChange={setInput}
            />
            <button onClick={() => addTodo(todo)}>Add Todo</button>
            <ul> 
                {todos.map((todo) => (
                    <li key={todo.id}> 
                        {todo.todo}
                        <button onClick={() => removeTodo(todo)}>&times;</button>
                    </li>
                ))}
            </ul> 
        </div>
    )
}

export default App
