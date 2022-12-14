import { FC } from "react"
import { GitRepoProps } from "./GitRepos.types"

const GitRepo: FC<GitRepoProps> = (props) => {
    const { repo } = props
    return (
        <li>
            <p><strong>Repo:</strong> {repo.name}</p>
            <p><strong>Description:</strong> {repo.description}</p>
            <p><strong>URL:</strong> <a href={`${repo.html_url}`}>{repo.html_url}</a></p>
        </li>
    )
}

export default GitRepo