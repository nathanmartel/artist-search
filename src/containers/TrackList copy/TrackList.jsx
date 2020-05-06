import React from 'react';
import PropTypes from 'prop-types';
import TrackListItem from '../../components/TrackListItem/TrackListItem';

const TrackList = ({ tracks }) => {
  
  const tracksResults = tracks.map(track => 
    <TrackListItem 
      key={track.id} 
      id={track.id} 
      title={track.title}
      length={track.length}
    />);

  return (
    <ol>
      {tracksResults}
    </ol>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default TrackList;
