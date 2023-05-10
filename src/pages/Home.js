import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Home = () => {
  const [quote, setQuote] = useState("");
  // const [image, setImage] = useState("");
  const [news, setNews] = useState([]);

  // const accessKey = "bnatQQw7w1MOBbmFcmd9o4rX50BltsdgP3xf6xXXydo";
  const newsApiKey = "5e34a7f6ce7145c8b9c32fe50579ae60";
  const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.quotable.io/random?tags=inspirational,famous-quotes"
      );
      const data = await response.json();
      setQuote(data.content);
    };

    const fetchNews = async () => {
      const response = await fetch(newsApiUrl);
      const data = await response.json();
      setNews(data.articles);
    };

    fetchQuote();
    fetchNews();
  }, [newsApiUrl]);

  return (
    <div className="container text-center">
      <h1 className="text-center pt-3 text-warning fw-bolder">
        Fortune Favours the Lucky Number
      </h1>

      {news.length > 0 ? (
        <div className="mt-3 pt-5">
          <h3 className="mb-5 fw-bolder">Latest News</h3>
          {news.map((article) => (
            <div key={article.title}>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading news...</p>
      )}

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

// const fetchImage = async () => {
//   const response = await fetch(
//     `https://api.unsplash.com/photos/random/?client_id=${accessKey}&orientation=landscape`
//   );
//   const data = await response.json();
//   if (data.urls && data.urls.regular) {
//     setImage(data.urls.regular);
//   } else {
//     setImage(
//       "https://via.placeholder.com/800x600?text=We%20couldn%27t%20find%20a%20photo"
//     );
//   }
// };

// fetchImage();

/* <div className="mt-3 pt-3">
{image ? (
  <img src={image} alt="Random" className="img-fluid rounded" />
) : (
  <p>We couldn't find a photo</p>
)}
</div> */
