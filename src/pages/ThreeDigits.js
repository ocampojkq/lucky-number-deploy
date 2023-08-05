import React, { useState } from 'react';
import Footer from './Footer';

const circleContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const circleNumber = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: '0 2px',
  color: 'white',
};

const ThreeDigits = () => {
  const [numbers, setNumbers] = useState([]);
  const [colors, setColors] = useState([]);
  const [quote, setQuote] = useState('');
  const [isRolling, setIsRolling] = useState(false); //     new state variable

  function selectSixNumbers() {
    return new Promise((resolve) => {
      const selectedNumbers = [];
      const selectedColors = [];
      let index = 0;
      const intervalId = setInterval(() => {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * 10);
        } while (selectedNumbers.includes(randomNumber));
        const randomColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
        selectedNumbers.push(randomNumber);
        selectedColors.push(randomColor);
        setNumbers([...selectedNumbers]);
        setColors([...selectedColors]);
        index++;
        if (index === 3) {
          clearInterval(intervalId);
          resolve();
          setQuote(getRandomQuote());
          setIsRolling(true); // set isRolling to false when the numbers are selected
        }
      }, 1000);
    });
  }
  const quotes = [
    'Luck is what happens when preparation meets opportunity.',
    'The only sure thing about luck is that it will change.',
    'Good luck is a residue of preparation.',
    'The harder I work, the luckier I get.',
    "Luck is not chance, it's toil; fortune's expensive smile is earned.",
    'Remember that sometimes not getting what you want is a wonderful stroke of luck.',
    'You make your own luck.',
    'I have had lots of luck in my career but there has also been a lot of hard work.',
    'Luck is what happens when preparation meets opportunity.',
    'Shallow men believe in luck. Strong men believe in cause and effect.',
    'You never know what worse luck your bad luck has saved you from.',
    'Luck is a dividend of sweat. The more you sweat, the luckier you get.',
    'Success is simply a matter of luck. Ask any failure.',
    'The best luck of all is the luck you make for yourself.',
    "It's hard to detect good luck -- it looks so much like something you've earned.",
    'We are all a great deal luckier than we realize; we usually get what we want - or near enough.',
    "I believe you make your own luck. My motto is 'It's always a mistake not to go.'",
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleClick = () => {
    if (!isRolling) {
      // only allow rolling if the button is not already clicked
      setIsRolling(true); // set isRolling to true when the button is clicked
      selectSixNumbers();
    }
  };

  return (
    <div className="container text-center pt-5">
      <div className="circle-container" style={circleContainer}>
        {numbers.map((number, index) => (
          <div
            key={index}
            className="circle-number"
            style={{ ...circleNumber, backgroundColor: colors[index] }}
          >
            {number}
          </div>
        ))}
      </div>
      <h6 className="pt-4 pb-2 fw-bold text-danger">3 DIGITS</h6>
      <button
        className="btn btn-danger  "
        onClick={handleClick}
        disabled={isRolling}
      >
        {isRolling ? 'Done rolling' : 'Roll the number'}
        {/* // change the button textto "Rolling..." when isRolling is true */}
      </button>

      {quote !== '' && <h5 className="mt-5 pt-5 fw-bold">{quote}</h5>}
      <Footer />
    </div>
  );
};

export default ThreeDigits;

// to have default 00 show in screen
// return (
//   <div className="container text-center pt-5">
//     <div className="circle-container" style={circleContainer}>
//       {numbers.length === 0 && (
//         <div
//           className="circle-number"
//           style={{ ...circleNumber, backgroundColor: "blue" }}
//         >
//           0
//         </div>
//       )}
//       {numbers.length === 0 && (
//         <div
//           className="circle-number"
//           style={{ ...circleNumber, backgroundColor: "blue" }}
//         >
//           0
//         </div>
//       )}
//       {numbers.map((number, index) => (
//         <div
//           key={index}
//           className="circle-number"
//           style={{ ...circleNumber, backgroundColor: colors[index] }}
//         >
//           {number}
//         </div>
//       ))}
//     </div>
//     <button
//       className="btn btn-primary mt-5 "
//       onClick={handleClick}
//       disabled={isRolling}
//     >
//       {isRolling ? "Done rolling" : "Roll the number"}

//     </button>

//     {quote !== "" && <h5 className="mt-5 pt-5 fw-bold">{quote}</h5>}
//     <Footer />
//   </div>
// );
// };
