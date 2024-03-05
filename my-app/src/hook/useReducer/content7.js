import { useReducer, useRef } from "react";
import reducer, { initState } from "./TodoList/reducer";
import { setJob, addJob, deleteJob } from "./TodoList/actions";
import logger from "./TodoList/logger";

function Content7() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();
  const handleSubmit = () => {
    if (job.trim() !== "") {
      dispatch(addJob(job));
      dispatch(setJob(""));
      inputRef.current.focus();
    }
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ cursor: "pointer" }}>
            {job}
            <span
              onClick={() => dispatch(deleteJob(index))}
              style={{ cursor: "pointer" }}
            >
              {" "}
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content7;
