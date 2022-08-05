const defaulFetchtOptions: RequestInit = {
    method: 'GET'
}

const fetchData = async (url: string, options: RequestInit = defaulFetchtOptions) => {
    const data = await fetch(url, options)
        .then((response) => response.json())

    return data
}

export const getGitData = async (userName: string) => {
    const url = `https://api.github.com/users/${userName}/repos`;
    const data = await fetchData(url)

    return data
}