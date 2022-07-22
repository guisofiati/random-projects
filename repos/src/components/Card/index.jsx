import Calendar from "../../assets/svg/calendar.svg";
import Globe from "../../assets/svg/globe.svg";
import Star from "../../assets/svg/star.svg";
import "./styles.css";

export function Card(props) {
    return (
        <>
            <div className="card">
                <header>
                    <h1 className="repo-title">{props.title}</h1>
                    <h2 className="repo-description">{props.description}</h2>
                </header>
                <section>
                    <main>
                        <div className="repo-created-at">
                            <img src={Calendar} alt="Imagem de um calendario" />
                            <p>{props.created_at}</p>
                        </div>
                        <div className="repo-language">
                            <img src={Globe} alt="Imagem de um globo" />
                            <p>{props.language}</p>
                        </div>
                        <div className="repo-stars">
                            <img src={Star} alt="Imagem de uma estrela" />
                            <p>{props.stars}</p>
                        </div>
                    </main>
                </section>
            </div>
        </>
    );
}
