import React, { useState, useEffect } from "react";

function Content1() {
  const [countdown, setCountdown] = useState(10);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let timer;
    if (isCounting && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
        console.log("Countdown...");
      }, 1000);
    } else if (countdown === 0) {
      alert("Hết thời gian!");
    }

    return () => clearTimeout(timer);
  }, [countdown, isCounting]);

  const handleToggle = () => {
    setIsCounting((prevState) => !prevState);
  };

  return (
    <div>
      <h1>{countdown}</h1>
      <button onClick={handleToggle}>
        {isCounting ? "Dừng" : "Tiếp tục"}{" "}
      </button>
    </div>
  );
}

export default Content1;
