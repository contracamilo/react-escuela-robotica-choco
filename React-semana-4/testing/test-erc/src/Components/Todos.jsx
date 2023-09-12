import { useEffect, useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setTodos(json));
    }, []);

    return (
        <>
        {todos.map((todo) => (
            <div key={todo.id}>
            <p>{todo.title}</p>
            </div>
        ))}
        </>
    );
}

export default Todos;