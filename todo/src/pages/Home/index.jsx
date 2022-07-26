import { useState } from "react";
import { Form } from "../../components/Form";
import { ListItem } from "../../components/ListItem";
import "./styles.css";

export function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo) {
            return;
        }
        console.log(todo);
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        const itemsRemaining = todos.filter((todo) => todo.id !== id);
        setTodos(itemsRemaining);
        console.log(itemsRemaining);
    };

    return (
        <>
            <div className="container">
                <h1>Todo list</h1>
                <Form onFormSubmit={addTodo} />
                <ol>
                    {todos.map((task) => (
                        <li key={task.id}>
                            <ListItem todo={task} removeItem={removeTodo} />
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}
