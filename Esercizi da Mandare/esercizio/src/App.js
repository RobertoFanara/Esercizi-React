import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"

const App = () => {

    return(
        <>
        <Routes>
            <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
        </>
    )
}

export default App