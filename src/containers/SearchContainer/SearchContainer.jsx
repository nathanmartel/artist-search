import React, { useState, useEffect } from 'react';
import './SearchContainer.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import { fetchSearch } from '../../services/services';

const SearchContainer = () => {

  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(null);
  const [results, setResults] = useState([]);

  const handleQueryChange = (e) => { setQuery(e.target.value); };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch(query, limit, page)
      .then(results => {
        setPage(0);
        setTotalResults(results.count);
        setResults(results.artists);
      });
  };

  useEffect(() => {
    if(query) {
      fetchSearch(query, limit, page)
        .then(results => {
          setTotalResults(results.count);
          setResults(results.artists);
        });
    }
  }, [page]);

  return (
    <>
      <SearchForm query={query} onQueryChange={handleQueryChange} onSubmit={handleSubmit} />
      <SearchResultsList results={results} />
      { totalResults && 
      <div>
        {totalResults} results
        <br />
        <button onClick={() => { setPage(prevPage => prevPage - 1); }} disabled={page < 1}>&lt;</button>
        { Number(page) + 1 } of { Math.ceil(totalResults / limit) } 
        <button onClick={() => { setPage(prevPage => prevPage + 1); }} disabled={(page + 1) * limit > totalResults}>&gt;</button>
      </div>
      }
    </>
  );
};

export default SearchContainer;
