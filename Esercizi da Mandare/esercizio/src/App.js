const Welcome = ({name = 'Alessandro', age}) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      <p>Your age is, {age = 33}</p>
    </>
  );
}

export default Welcome;
