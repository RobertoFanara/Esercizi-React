import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

const useGithubUser = (username) => {
    const {data} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        data
    }   
}

export default useGithubUser