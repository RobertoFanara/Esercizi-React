import { useState } from "react";

const Clickcounter = () => {
    let [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return(
        <>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>+ 1</button>
        </>
    )
}

export default Clickcounter