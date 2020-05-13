import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrackListItem = ({ id, title, length }) => {
  
  return (
    <li key={id}>
      <Link to={`/song/${id}`}>
        {title} ({length})
      </Link>
    </li>
  );
};

TrackListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default TrackListItem;
