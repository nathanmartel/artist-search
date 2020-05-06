import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArtistInfoBySongId, fetchLyrics } from '../../services/services';

const SongContainer = () => {

  const { song } = useParams();
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  

  useEffect(() => {   
    fetchArtistInfoBySongId(song)
      .then(results => {
        console.log('artistInfo results are', results);
        setArtist(results.artist);
        setTitle(results.title);
      });
    // Well, chaining these breaks it... tried to async/await the fetch calls and no dice.
    // fetchLyrics(artist, title)
    //   .then(results => {
    //     console.log('song results are', results);
    //     setLyrics(results.lyrics);
    //   });
  }, []);

  return (
    <>
      There may not be any lyrics here, but there is an artist name ({artist}) and a title ({title})!
      {lyrics && 
        <>
          {lyrics}
        </> 
      }

    </>
  );
};

export default SongContainer;
