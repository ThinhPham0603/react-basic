import React, { useRef } from "react";
//import TodoList1 from "./TodoList1";
import "../App.scss";
import Video from "../Video";

function Context8() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="container">
      <Video className="video" ref={videoRef} />
      <div className="controls">
        <button className="play-btn" onClick={handlePlay}>
          Play
        </button>
        <button className="pause-btn" onClick={handlePause}>
          Pause
        </button>
      </div>
    </div>
  );
}

export default Context8;
