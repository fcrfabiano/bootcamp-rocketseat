interface RepositoryProps {
    repository: {
        name: string;
        description?: string;
        html_url: string;
    }
}

function RepositoryItem(props: RepositoryProps) {
    const { repository } = props;

    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url} target="_blank">
                {repository.html_url}
            </a>
        </li>
    )
}

export default RepositoryItem