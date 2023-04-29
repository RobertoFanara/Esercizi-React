const Age = ({age = 19}) => {
    
    if(age >= 18) {
        return (
            <p>Your age is, {age}</p>
        )
    }else {
        return(
            <p>You're Young!</p>
        )
    }
}

export default Age
