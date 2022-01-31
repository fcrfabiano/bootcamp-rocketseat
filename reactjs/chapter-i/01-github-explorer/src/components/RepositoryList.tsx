import RepositoryItem from "./RepositoryItem"
import "../styles/repositories.scss";
import { useState, useEffect } from "react";
import axios from "axios";

interface Repository {
    name: string;
    description?: string;
    html_url: string;
}

function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        const repo = axios.get("https://api.github.com/users/fcrfabiano/repos")
            .then((response) => {
                setRepositories(response.data);
            })
            .catch((error) => {
            console.log(error)
         });
    });

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {
                    repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)
                }
            </ul>
        </section>
    )
}

export default RepositoryList