import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Home = () => {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');

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
  }, []);

  return (
    <div className="container text-center">
      <a href="https://www.facebook.com/pcso.gov">
        <i className="fa-brands fa-square-facebook  fa-xl p-2 footer-icon"></i>
      </a>{' '}
      <h4>Click facebook icon for update result</h4>
      <h1 className="text-center pt-3 text-warning fw-bolder">
        Fortune Favours the Lucky Number
      </h1>
      <div className="mt-3 pt-3">
        {image ? (
          <img src={image} alt="Random" className="img-fluid rounded" />
        ) : (
          <p>We couldn't find a photo</p>
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
