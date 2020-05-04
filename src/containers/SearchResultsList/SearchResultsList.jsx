import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsListItem from '../../components/SearchResultsListItem/SearchResultsListItem';

const SearchResultsList = ({ results }) => {
  
  const searchResults = results.map(artist => <SearchResultsListItem key={artist.id} id={artist.id} name={artist.name} />);

  return (
    <ul>
      {searchResults}
    </ul>
  );
};

SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired
};

export default SearchResultsList;
