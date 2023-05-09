import React from "react";

import { useState } from "react";

const ThreeDigits = () => {
  const [num, setNum] = useState("000");
  const [clicked, setClicked] = useState(false);
  const [rolling, setRolling] = useState(false);

  function randomNumberInRange() {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
  }

  const handleClick = () => {
    const rollTime = 2000;
    if (!clicked) {
      setClicked(true);
      setNum("Rolling..."); // set the initial text before rolling the number
      setRolling(true);
      let i = 0;
      const interval = setInterval(() => {
        setNum(randomNumberInRange().toString().padStart(2, "0")); // update the number at regular intervals
        i++;
        if (i === rollTime / 100) {
          clearInterval(interval); // clear the interval after roll time has passed
          setNum(randomNumberInRange().toString().padStart(2, "0")); // set the final number after the rolling is complete
          setClicked(false);
          setRolling(false);
        }
      }, 100); // set interval time to 100ms
    }
  };

  return (
    <div class="conatiner text-center">
      <h1 class="pt-5 text-danger circle-number">
        {rolling ? "Rolling..." : num}
      </h1>
      <button className="btn btn-danger mt-3" onClick={handleClick}>
        Roll the number
      </button>
    </div>
  );
};

export default ThreeDigits;
