import Counter from "./Counter"
import Clickcounter from "./Clickcounter"
import Clicktracker from "./Clicktracker"


const App = () => {
    return (
      <>
        <Counter increment={2} interval={2000}/>
        <Clickcounter />
        <Clicktracker />
      </>
    )
}

export default App