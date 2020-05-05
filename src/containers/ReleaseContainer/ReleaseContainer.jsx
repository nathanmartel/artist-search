import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrackList from '../TrackList/TrackList';
import { fetchTracks } from '../../services/services';

const ReleaseContainer = () => {

  const { release } = useParams();
  const [tracks, setTracks] = useState([]);
  

  useEffect(() => {
    fetchTracks(release)
      .then(results => {
        setTracks(results.recordings);
      });
  }, []);

  return (
    <>
      <TrackList tracks={tracks} />
    </>
  );
};

export default ReleaseContainer;
