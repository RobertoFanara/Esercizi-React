import { useEffect } from "react";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + props.increment), props.interval);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default Counter;
