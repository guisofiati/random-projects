import { useState } from "react";
import "./styles.css";

export function Form(props) {
    const [input, setInput] = useState("");
    const [id, setId] = useState(1);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        //a prop é uma funcao
        props.onFormSubmit({
            id: id,
            text: input,
        });

        setId(id + 1);
        setInput("");
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="input-form">
                        What do you need to do today? 📄✏️
                    </label>
                    <input
                        type="text"
                        id="input-form"
                        placeholder="E.g: To wash mom's car"
                        autoFocus
                        required
                        onChange={handleInputChange}
                        value={input}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
}
