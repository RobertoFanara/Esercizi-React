import Age from "./Age";

const Welcome = ({name = <strong>Alessandro</strong>}) => {    // What happens if the name prop is a JSX expression instead of a string?
  return (                                                          // the name will be bold
    <>
      <p>Welcome, {name}!</p>
      <Age />
    </>
  );
}

export default Welcome;
