import DeleteIconSVG from "../../assets/svg/DeleteIcon.svg";

import "./styles.css";

export function ListItem() {
    return (
        <>
            <div className="item">
                <h1 className="item-title">Tarefa 1</h1>
                <button type="button" className="item-button">
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
