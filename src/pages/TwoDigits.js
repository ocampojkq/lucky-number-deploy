import React, { useState, useRef } from "react";
import Footer from "./Footer";

const TwoDigits = () => {
  const [number, setNumber] = useState("00");
  const [timeoutActive, setTimeoutActive] = useState(false);
  const timeoutRef = useRef(null);
  const [quote, setQuote] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const generateNumber = () => {
    const min = 0;
    const max = 99;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(randomnumber.toString().padStart(2, "0"));
    clearTimeout(timeoutRef.current);
    setTimeoutActive(true);
    setButtonDisabled(true);
    timeoutRef.current = setTimeout(() => {
      setTimeoutActive(false);
      setQuote(getRandomQuote());
    }, 1000);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
    <div className="container text-center pt-5 ">
      <div
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {number && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {number
              .toString()
              .split("")
              .map((digit, index) => (
                <div
                  key={index}
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "2rem",
                    borderRadius: "50%",
                    margin: "2px",

                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: getRandomColor(),
                    color: "white",
                  }}
                >
                  {digit}
                </div>
              ))}
          </div>
        )}
        <button
          className="btn btn-primary mt-5"
          onClick={generateNumber}
          disabled={timeoutActive || buttonDisabled}
          style={{ margin: "auto" }}
        >
          {buttonDisabled ? "Done rolling" : "Roll the number"}
        </button>

        {quote !== "" && <h5 className="mt-5 pt-5 fw-bold">{quote}</h5>}
      </div>
      <Footer />
    </div>
  );
};

export default TwoDigits;
