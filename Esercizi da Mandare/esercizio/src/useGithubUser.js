import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

const useGithubUser = (username) => {
    const {data} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    return {
        data,
        error
    }   
}

export default useGithubUser