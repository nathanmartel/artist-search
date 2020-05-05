import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ query = '', onQueryChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={query} onChange={onQueryChange} />
      <button onSubmit={() => onSubmit}>Submit</button>
    </form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
