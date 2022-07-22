import { useState } from "react";
import "./styles.css";

export function Home() {
    const [count, setCount] = useState(0);

    function handleIncrementCount() {
        setCount((count) => count + 1);
    }

    function handleDecrementCount() {
        setCount((count) => count - 1);
    }

    return (
        <>
            <div className="container">
                <h1>Contador</h1>
                <div className="content">
                    <button
                        type="button"
                        title="Aumentar"
                        onClick={handleIncrementCount}
                    >
                        +
                    </button>
                    <span>{count}</span>
                    <button
                        type="button"
                        title="Diminuir"
                        onClick={handleDecrementCount}
                    >
                        -
                    </button>
                </div>
            </div>
        </>
    );
}
