import React from "react";

import { useState } from "react";

const FourDigits = () => {
  const [num, setNum] = useState("0000");
  const [clicked, setClicked] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [quote, setQuote] = useState("");

  function randomNumberInRange() {
    return Math.floor(Math.random() * 9000 + 1000);
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
          setClicked(true);
          setRolling(false);
          setQuote(getRandomQuote());
        }
      }, 100); // set interval time to 100ms
    }
  };

  const randomColor = () => {
    const colors = ["red", "blue", "green", "orange", "purple", "teal"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

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

  const quotes = [
    "Luck is what happens when preparation meets opportunity.",
    "The only sure thing about luck is that it will change.",
    "Good luck is a residue of preparation.",
    "The harder I work, the luckier I get.",
    "Luck is not chance, it's toil; fortune's expensive smile is earned.",
    "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    "You make your own luck.",
    "I have had lots of luck in my career but there has also been a lot of hard work.",
    "Luck is what happens when preparation meets opportunity.",
    "Shallow men believe in luck. Strong men believe in cause and effect.",
    "You never know what worse luck your bad luck has saved you from.",
    "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
    "Success is simply a matter of luck. Ask any failure.",
    "The best luck of all is the luck you make for yourself.",
    "It's hard to detect good luck -- it looks so much like something you've earned.",
    "We are all a great deal luckier than we realize; we usually get what we want - or near enough.",
    "I believe you make your own luck. My motto is 'It's always a mistake not to go.'",
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return (
    <div className="container text-center pt-5">
      <div className="text-center">
        <h1 className=" circle-number" style={circleStyles}>
          {rolling ? "Rolling" : num}
        </h1>
        <button className="btn btn-success mt-5" onClick={handleClick}>
          Roll the number
        </button>
        {quote !== "" && <h5 className="mt-5 fw-bold">{quote}</h5>}
      </div>
    </div>
  );
};
export default FourDigits;

//  return Math.floor(Math.random() * 9000 + 1000);
