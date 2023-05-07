import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

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
