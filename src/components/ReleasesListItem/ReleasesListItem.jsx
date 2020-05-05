import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ReleasesListItem.css';

const ReleasesListItem = ({ id, title }) => {
  
  const albumArt = () => {
    fetch(`http://coverartarchive.org/release/${id}/front`)
      .then(res => { 
        if(res.ok) return `http://coverartarchive.org/release/${id}/front`;
        else return 'https://static1.squarespace.com/static/5d2e2c5ef24531000113c2a4/5d392a924397f100011fa30e/5e3a25cd835c71275a63090f/1584294919598/?format=1500w'
      });
  };
  
  return (
    <li key={id}>
      <Link to={`./${title}`}>
        {/* { console.log('albumArt is', albumArt()) } */}
        <img src={`http://coverartarchive.org/release/${id}/front`} alt={`${title} cover`} />
        <h4>{ title }</h4>
      </Link>
    </li>
  );
};

ReleasesListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ReleasesListItem;
