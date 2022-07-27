import { useState } from "react";
import { Form } from "../../components/Form";
import { ListItem } from "../../components/ListItem";

export function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        console.log(todo);
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        console.log(id);
        const todoRemaining = todos.filter((todo) => todo.id !== id);
        console.log(todoRemaining);
        setTodos(todoRemaining);
    };

    return (
        <>
            <div className="container">
                <h1>My todo list</h1>
                <Form addTodo={addTodo} />
                <div className="items">
                    <ol>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <ListItem todo={todo} deleteTodo={deleteTodo} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
