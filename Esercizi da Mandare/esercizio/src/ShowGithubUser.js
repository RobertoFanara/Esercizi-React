import GithubUser from "./GithubUser"
import { useParams } from "react-router-dom"

const ShowGithubUser = () => {
    const {username = "INVALID-NAME"} = useParams()

    return(
        <>
        <GithubUser username={username}/>
        </>
    )
}

export default ShowGithubUser