import React, { useEffect, useRef, useState } from "react";

function Content4() {
  const [count, setCount] = useState(60);

  const prevCount = useRef();
  const timeId = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("Start ->", timeId.current);
  };

  const handleStop = () => {
    clearInterval(timeId.current);
    console.log("Stop ->", timeId.current);
  };
  console.log(count, prevCount.current);
  
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content4;
