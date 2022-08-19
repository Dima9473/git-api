import { FC, FormEvent, useCallback, useEffect, useState } from "react"

import { getReposAsync } from "../../api/git"
import GitRepo from "./GitRepo"

const GitRepos: FC = () => {
    const [value, setValue] = useState<string>('dima9473')
    const [repos, setRepos] = useState<any[]>([])
    const [company, setCompany] = useState<any[]>([])
    const [isRequestSended, setIsRequestSended] = useState<boolean>(false)

    const handleInputChange = useCallback((value: FormEvent<HTMLInputElement>) => {
        setValue(value.currentTarget.value)
    }, [])

    const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = await getReposAsync(value)
        if (!data) {
            return
        }

        setRepos(data.repos)
        setCompany(data.company)
        setIsRequestSended(true)
    }, [value])

    return (
        <div>
            <h3>GitHub Repos</h3>
            <form className="form" onSubmit={handleSubmit}>
                <input className='gitName' type="text" placeholder="GitHub Username" value={value} onChange={handleInputChange} />
                <input type="submit" value="Submit" />
            </form>
            {isRequestSended && !repos?.length && <p><strong>No account exists with username:</strong> {value}</p>}
            {isRequestSended && repos?.length && <p><strong>Number of Public Repos:</strong> {repos.length}</p>}
            {isRequestSended && company && <p><strong>Company name:</strong> {company}</p>}
            <ul>
                {repos?.map((repo, index) => <GitRepo key={index} repo={repo} />)}
            </ul>
        </div>
    )
}

export default GitRepos