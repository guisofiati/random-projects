import "./styles.css";

import DeleteIconSVG from "../../assets/svg/DeleteIcon.svg";

export function ListItem({ todo }) {
    return (
        <>
            <div className="item">
                <h1>{todo.text}</h1>
                <button type="button">
                    <img
                        src={DeleteIconSVG}
                        alt="Trash icon"
                        title="Remove this item"
                    />
                </button>
            </div>
        </>
    );
}
