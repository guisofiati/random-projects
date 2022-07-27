import { useState } from "react";
import { Form } from "../../components/Form";
import { ListItem } from "../../components/ListItem";

export function Home() {
    const [todos, setTodos] = useState([1, 2, 3, 4, 5]);

    console.log(todos.length);

    return (
        <>
            <div className="container">
                <h1>My todo list</h1>
                <Form />
                <div className="items">
                    <ol>
                        {todos.map((todo) => (
                            <li>
                                <ListItem />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
