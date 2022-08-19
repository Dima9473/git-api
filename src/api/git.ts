import axios from "axios";

export const getReposAsync = async (userName: string) => {
    const promise = await axios.get(`http://localhost:3000/repos/${userName}`);
    const status = promise.status;
    if (status === 200) {
        const data = promise.data;
        return data
    }

    return null
}