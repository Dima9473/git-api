import { FC } from "react"
import GitRepo from "./GitRepo"
import { GitReposProps } from "./GitRepos.types"

const GitRepos: FC<GitReposProps> = (props) => {
    const { repos } = props

    if (!repos.length) {
        return null
    }

    return (
        <ul>
            {repos?.map(repo => <GitRepo repo={repo} />)}
        </ul>
    )
}

export default GitRepos