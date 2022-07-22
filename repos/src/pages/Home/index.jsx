import { useEffect, useState } from "react";
import { Card } from "../../components/Card";

import "./styles.css";

export function Home() {
    const [repo, setRepo] = useState([]);
    const [totalRepos, setTotalRepos] = useState([]);

    useEffect(() => {
        async function handleGetRepositories() {
            const response = await fetch(
                "https://api.github.com/users/guisofiati/repos"
            );
            const data = await response.json();
            console.log("dados da api: ", data);
            setRepo(data);

            const res = await fetch("https://api.github.com/users/guisofiati");
            const api_data = await res.json();
            const total_repos = api_data.public_repos;
            setTotalRepos(total_repos);
        }

        handleGetRepositories();
    }, []);

    function formatData(date) {
        return new Date(date).toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
        });
    }

    return (
        <>
            <div className="container">
                <h1 className="title">My projects from GitHub</h1>
                <p className="description">
                    Total repos: <strong>{totalRepos}</strong>
                </p>
                {repo.map((repo) => (
                    <Card
                        key={repo.id}
                        title={repo.name}
                        description={repo.description}
                        created_at={formatData(repo.created_at)}
                        language={repo.language}
                        stars={repo.stargazers_count}
                    />
                ))}
            </div>
        </>
    );
}
