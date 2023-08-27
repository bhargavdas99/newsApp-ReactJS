import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const { mode } = props
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async() => {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b42cdca1bef94ef5818f8f5516977e62&page=${props.page}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    };

    fetchNews();
  }, []);

  const handleHomeClick = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b42cdca1bef94ef5818f8f5516977e62&page=${props.page}&pageSize=${props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    setPage(1);
    setArticles(data.articles);
    setLoading(false);
  };

  const handlePrevClick = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b42cdca1bef94ef5818f8f5516977e62&page=${props.page}&pageSize=${props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    setPage(page - 1);
    setArticles(data.articles);
    setLoading(false);
  };

  const handleNextClick = async () => {
    let pageSize=props.pageSize;
    if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b42cdca1bef94ef5818f8f5516977e62&page=${props.page}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      setPage(page + 1);
      setArticles(data.articles);
      setLoading(false);
    }
  };

  return (
    <div className="container text-center  my-3">
      <h1 style={{color: props.mode==="dark"?'white':'black',margin: '1em auto' }}>UNITED INDIA TIMES</h1>

      <div className="container d-flex justify-content-between">
        <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={handlePrevClick}>
          ← previous
        </button>
        <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={handleHomeClick}>
          Go to home
        </button>
        <button
          type="button"
          
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-primary"
          onClick={handleNextClick}
        >
          next →
        </button>
      </div>
      <div className="row" style={{ margin: '1em auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {loading && <Spinner />} {/*if loading=True then initiate Spinner, else skip*/}
        {!loading &&
          articles.map((element) => (
            <div className="col-md-4 my-3"  key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 80) + '...' : ''}
                description={element.description ? element.description.slice(0, 100) + '...' : ''}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
                mode={mode}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={handlePrevClick}>
          ← previous
        </button>
        <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={handleHomeClick}>
          Go to home
        </button>
        <button
          type="button"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-primary"
          onClick={handleNextClick}
        >
          next →
        </button>
      </div>
    </div>
  );
};

News.defaultProps ={
country : 'in',
pageSize : 6,
category : 'general'}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
