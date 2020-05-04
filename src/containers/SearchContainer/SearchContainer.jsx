import React, { useState } from 'react';
import './SearchContainer.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResultsList from '../SearchResultsList/SearchResultsList';

const SearchContainer = () => {

  const [artist, setArtist] = useState('');
  const [results, setResults] = useState([]);

  const handleArtistChange = (e) => { setArtist(e.target.value); };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
      .then(res => res.json())
      .then(json => setResults(json.artists));
  };

  return (
    <>
      <SearchForm artist={artist} onArtistChange={handleArtistChange} onSubmit={handleSubmit} />
      <SearchResultsList results={results} />
    </>
  );
};

export default SearchContainer;
