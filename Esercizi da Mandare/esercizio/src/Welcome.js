import Age from "./Age";

const Welcome = (props) => {    // What happens if the name prop is a JSX expression instead of a string?
  return (                                                          // the name will be bold
    <>
      <p>Welcome, {props.name}!</p>
      {props.age >= 18  ? <Age age={props.age}/> : <p>age is not defined</p>}
    </>
  );
}

export default Welcome;
