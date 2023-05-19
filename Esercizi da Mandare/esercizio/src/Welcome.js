
const Welcome = (props) => {    // What happens if the name prop is a JSX expression instead of a string?
  return (                                                          // the name will be bold
    <>
      <p>Welcome, {props.name}!</p>
    </>
  );
}

export default Welcome;
