import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ReleasesListItem.css';

const ReleasesListItem = ({ id, title, coverArt }) => {
  
  return (
    <li key={id}>
      <Link to={location => `${location.pathname}/${id}`}>
        <img src={coverArt 
          ? `http://coverartarchive.org/release/${id}/front`
          : 'https://static1.squarespace.com/static/5d2e2c5ef24531000113c2a4/5d392a924397f100011fa30e/5e3a25cd835c71275a63090f/1584294919598/?format=1500w'} 
        alt={`${title} cover`} />
        <h4>{ title }</h4>
      </Link>
    </li>
  );
};

ReleasesListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverArt: PropTypes.bool.isRequired
};

export default ReleasesListItem;
