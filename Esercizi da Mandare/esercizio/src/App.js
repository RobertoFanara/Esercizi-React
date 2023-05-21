import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Clickcounter from "./Clickcounter"

const App = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Clickcounter />} />
        </Routes>
        </>
    )
}

export default App