import { useReducer } from "react";
// useState
//1. Init state: 0
//2. actions: up (state + 1) / down (state - 1)

// useReducer
//1. Init state: 0
//2. actions: up (state + 1) / down (state - 1)
//3. Reducer
//4.Dispath truyen vao action

// Init state
const initSate = 0;
//Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
//Reducer
const reducer = (state, action) => {
  console.log("reducer running...");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function Content6() {
  const [count, dispath] = useReducer(reducer, initSate);
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispath(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispath(UP_ACTION)}>Up</button>
    </div>
  );
}
export default Content6;
