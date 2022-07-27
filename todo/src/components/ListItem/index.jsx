import DeleteIconSVG from "../../assets/svg/DeleteIcon.svg";

import "./styles.css";

export function ListItem({ todo, deleteTodo }) {
    return (
        <>
            <div className="item">
                <h1 className="item-title">{todo.text}</h1>
                <button
                    type="button"
                    className="item-button"
                    onClick={() => deleteTodo(todo.id)}
                >
                    <img
                        src={DeleteIconSVG}
                        alt="Trash icon"
                        title="Remove this task"
                    />
                </button>
            </div>
        </>
    );
}
