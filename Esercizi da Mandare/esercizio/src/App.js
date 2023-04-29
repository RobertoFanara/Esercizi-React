const Welcome = ({name = <strong>Alessandro</strong>, age}) => {    // What happens if the name prop is a JSX expression instead of a string?
  return (                                                          // the name will be bold
    <>
      <p>Welcome, {name}!</p>
      <p>Your age is, {age = 33}</p>
    </>
  );
}

export default Welcome;
