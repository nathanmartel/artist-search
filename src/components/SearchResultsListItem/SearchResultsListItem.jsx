import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchResultsListItem.css';

const SearchResultsListItem = ({ id, name }) => {
  return (
    <li key={id}>
      <Link to={`./${id}`}>{ name }</Link>
    </li>
  );
};

SearchResultsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SearchResultsListItem;
