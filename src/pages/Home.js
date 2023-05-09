import React, { useState, useEffect } from "react";

const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.quotable.io/random?tags=inspirational,famous-quotes"
      );
      const data = await response.json();
      setQuote(data.content);
    };
    fetchQuote();
  }, []);

  return (
    <div class="container text-center">
      <h1 class="text-center pt-5 text-warning fw-bolder">
        Fortune Favours the Lucky Number
      </h1>
      {quote && (
        <div className="mt-3">
          <blockquote className="blockquote">
            <h4 className="mb-0 pt-5 fw-bold">{quote}</h4>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default Home;
