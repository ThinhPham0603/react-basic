import React, { useState, useCallback } from "react";
import ChildContent from "./ChildContent";
//1. memo() -> Higher Order Component (HOC)
//useCallback()

//Hooks
//HOC
//Render props

function Content5() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: "10px 32 px" }}>
      <ChildContent onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default Content5;
