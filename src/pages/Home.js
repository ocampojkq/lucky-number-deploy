import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Home = () => {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const accessKey = 'bnatQQw7w1MOBbmFcmd9o4rX50BltsdgP3xf6xXXydo';

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        'https://api.quotable.io/random?tags=inspirational,famous-quotes'
      );
      const data = await response.json();
      setQuote(data.content);
    };

    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${accessKey}&orientation=landscape`
      );
      const data = await response.json();
      if (data.urls && data.urls.regular) {
        setImage(data.urls.regular);
      } else {
        setImage(
          'https://via.placeholder.com/800x600?text=We%20couldn%27t%20find%20a%20photo'
        );
      }
    };

    fetchImage();
    fetchQuote();

    //  set the current date when the component mounts
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container text-center">
      <a
        href="https://www.facebook.com/pcso.gov"
        target="_blank"
        rel="noreferrer"
        className="fw-bold text-decoration-none"
      >
        {' '}
        {currentDate} Result
        <i className="fa-brands fa-square-facebook  fa-xl p-2 footer-icon"></i>
      </a>{' '}
      <br />
      <a
        href="https://www.pcso.gov.ph/"
        target="_blank"
        rel="noreferrer"
        className="fw-bold text-decoration-none"
      >
        PCSO <img src="/PreloaderPCSO.gif" alt="PCSO Icon" title="PCSO"></img>
      </a>
      <h1 className="text-center pt-3 text-warning fw-bolder">
        Fortune Favours the Lucky Number
      </h1>
      <div className="mt-3 pt-3">
        {image ? (
          <img src={image} alt="Random" className="img-fluid rounded" />
        ) : (
          <p></p>
        )}
      </div>
      {quote && (
        <div className="mt-3">
          <blockquote className="blockquote">
            <h4 className="mb-0 pt-3 fw-bold">{quote}</h4>
          </blockquote>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
