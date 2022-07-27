import { useState } from "react";

import "./styles.css";

export function Form() {
    /*
    - event.target.value = pegar oque esta no input
    - onClick(() = console.log(task)). vai aparecer e sumir pois o form atualiza a pagina, (se n tiver onsubmit)
    - preventDefault = nao atualiza a pagina quando envia o form
    */

    const [task, setTask] = useState("");

    function handleSubmitForm(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="todo-input">
                        What do you need to do today? 📃✏️
                    </label>
                    <input
                        type="text"
                        id="todo-input"
                        placeholder="E.g: To wash mom's car"
                        autoFocus
                        required
                        onChange={(event) => setTask(event.target.value)}
                    />
                    <button type="submit" onClick={() => console.log(task)}>
                        Add
                    </button>
                </form>
            </div>
        </>
    );
}
