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
    const rollTime = 1000;
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
          setClicked(true);
          setRolling(false);
        }
      }, 100); // set interval time to 100ms
    }
  };

  const randomColor = () => {
    const colors = ["red", "blue", "green", "orange", "purple", "teal"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const luckyQuotes = [
    "Luck is what happens when preparation meets opportunity.",
    "The only sure thing about luck is that it will change.",
    "Shallow men believe in luck or in circumstance. Strong men believe in cause and effect.",
    "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
    "Luck is not chance, it's toil. Fortune's expensive smile is earned.",
    "I have found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
    "Luck is not something you can mention in the presence of self-made men.",
    "The meeting of preparation with opportunity generates the offspring we call luck.",
    "The only way to get lucky is to take risks.",
    "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
  ];

  const randomQuote =
    luckyQuotes[Math.floor(Math.random() * luckyQuotes.length)];

  const circleStyles = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: randomColor(),
    margin: "auto",
  };

  return (
    <div className="container text-center pt-5">
      <div className="text-center">
        <h1 className=" circle-number" style={circleStyles}>
          {rolling ? "Rolling" : num}
        </h1>
        <button className="btn btn-danger mt-5" onClick={handleClick}>
          Roll the number
        </button>
        <div className="mt-3 fw-bold pt-5">
          <h4>{randomQuote}</h4>
        </div>
      </div>
    </div>
  );
};

export default ThreeDigits;

//  return Math.floor(Math.random() * (999 - 100 + 1) + 100);
