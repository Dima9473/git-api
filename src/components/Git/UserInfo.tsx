import { FC, FormEvent, useCallback, useState } from "react"

import { getReposAsync } from "../../api/git"
import GitRepos from "./GitRepos"

const UserInfo: FC = () => {
    const [value, setValue] = useState<string>('dima9473')
    const [repos, setRepos] = useState<any[]>([])
    const [company, setCompany] = useState<string>()
    const [isRequestSended, setIsRequestSended] = useState<boolean>(false)

    const handleInputChange = useCallback((value: FormEvent<HTMLInputElement>) => {
        setValue(value.currentTarget.value)
    }, [])

    const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = await getReposAsync(value)
        setIsRequestSended(true)
        if (!data) {
            return
        }

        setRepos(data.repos)
        setCompany(data.company)
    }, [value])

    return (
        <div>
            <h3>GitHub Repos</h3>
            <form className="form" onSubmit={handleSubmit}>
                <input className='gitName' type="text" placeholder="GitHub Username" value={value} onChange={handleInputChange} />
                <input type="submit" value="Submit" />
            </form>
            {isRequestSended && !repos?.length && <p><strong>No account exists with username:</strong> {value}</p>}
            {isRequestSended && !!repos?.length && <p><strong>Number of Public Repos:</strong> {repos.length}</p>}
            {isRequestSended && company && <p><strong>Company name:</strong> {company}</p>}
            {isRequestSended && <p><strong>Public repositories:</strong></p>}
            <GitRepos repos={repos} />
        </div>
    )
}

export default UserInfo