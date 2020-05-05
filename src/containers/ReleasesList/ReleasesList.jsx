import React from 'react';
import PropTypes from 'prop-types';
import ReleasesListItem from '../../components/ReleasesListItem/ReleasesListItem';

const ReleasesList = ({ releases }) => {
  
  const releasesResults = releases.map(release => 
    <ReleasesListItem 
      key={release.id} 
      id={release.id} 
      title={release.title}
      coverArt={release['cover-art-archive'].front} />);

  return (
    <ul>
      {releasesResults}
    </ul>
  );
};

ReleasesList.propTypes = {
  releases: PropTypes.array.isRequired
};

export default ReleasesList;
