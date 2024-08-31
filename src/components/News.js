import React, { useEffect, useState } from 'react';
import 'C:\\Users\\shrey\\OneDrive\\Desktop\\news API\\news-website\\src\\App.css'; 

function NewsHeadlines() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bc28325afec942c8a241969a7aa40a87')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(err => setError(err));
  }, []);

  if (error) {
    return <p>Sorry, we couldn't load the news at the moment.</p>;
  }

  if (!articles.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Latest Headlines</h2>
      <div className="news-container">
        {articles.map((article, index) => (
          <a href={article.url} key={index} target="_blank" rel="noopener noreferrer">
            <div className="news-box">
              <h3>{article.title}</h3>
              <p>{article.source.name}</p>
              <p>{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NewsHeadlines;
