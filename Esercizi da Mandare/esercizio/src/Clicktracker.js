import { useState } from "react"

const Clicktracker = () => {
    const [change, setChange] = useState('')

    const handleChangeh1 = (event) => {
        setChange(`U click on this button: ${event.target.name}`)
    }



    return(
        <>
            <button onClick={handleChangeh1} name="Button-1">Button 1</button>
            <button onClick={handleChangeh1} name="Button-2">Button 2</button>
            <button onClick={handleChangeh1} name="Button-3">Button 3</button>

            <h1>{change}</h1>
        </>
    )
}

export default Clicktracker