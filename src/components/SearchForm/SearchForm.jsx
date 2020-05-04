import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ artist = '', onArtistChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={artist} onChange={onArtistChange} />
      <button onSubmit={() => onSubmit}>Submit</button>
    </form>
  );
};

SearchForm.propTypes = {
  artist: PropTypes.string.isRequired,
  onArtistChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
