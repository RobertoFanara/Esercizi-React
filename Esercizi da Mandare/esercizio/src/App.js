import Counter from "./Counter"
import Clickcounter from "./Clickcounter"


const App = () => {
    return (
      <>
        <Counter increment={2} interval={2000}/>
        <Clickcounter />
      </>
    )
}

export default App