import useGithubUser from "./useGithubUser"

const GithubUser = ({username}) => {
    const {data} = useGithubUser(username)
    
    return <div>
        <button onClick={onRefresh}>refresh data</button>
        {error && <h1>Error</h1>}
        {data && (
        <>
        <div>
        <h1>{data.name}</h1>
        <p>{data.login}</p>
        </div>
        </>
        )}
    </div>
}

export default GithubUser