import Welcome from "./Welcome"
import {useState} from 'react' 

const InteractiveWelcome = () => {
    const [name, setName] = useState('')

    function handleChange(event){
        setName(event.target.value)
    }

    return(
        <>
            <input onChange={handleChange} value={name}></input>
            <Welcome name={name}/>
        </>
    )
}

export default InteractiveWelcome