import Calendar from "../../assets/svg/calendar.svg";
import Globe from "../../assets/svg/globe.svg";
import Star from "../../assets/svg/star.svg";
import Link from "../../assets/svg/link.svg";
import "./styles.css";

export function Card(props) {
    return (
        <>
            <div className="card">
                <header>
                    <h1 className="repo-title">
                        {props.title}
                        <a href={props.link} target="_blank">
                            <img
                                src={Link}
                                alt="Link symbol"
                                title="Take a look on GitHub"
                            />
                        </a>
                    </h1>
                    <h2 className="repo-description">{props.description}</h2>
                </header>
                <section>
                    <main>
                        <div className="repo-created-at">
                            <img
                                src={Calendar}
                                alt="Calendar symbol"
                                title="Repo created at..."
                            />
                            <p>{props.created_at}</p>
                        </div>
                        <div className="repo-language">
                            <img
                                src={Globe}
                                alt="Globe symbol"
                                title="Repo's language"
                            />
                            <p>{props.language}</p>
                        </div>
                        <div className="repo-stars">
                            <img
                                src={Star}
                                alt="Star symbol"
                                title="Repo's stars"
                            />
                            <p>{props.stars}</p>
                        </div>
                    </main>
                </section>
            </div>
        </>
    );
}
