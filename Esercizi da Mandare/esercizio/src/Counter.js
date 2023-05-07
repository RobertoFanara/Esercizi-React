import { useEffect } from "react";
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

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
      <CounterDisplay number={count}/>
      
    </>
  );
};

export default Counter;
