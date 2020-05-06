import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArtistInfoBySongId, fetchLyrics } from '../../services/services';


const useArtistInfo = (song) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {   
    fetchArtistInfoBySongId(song)
      .then(results => {
        console.log('artistInfo results are', results);
        setArtist(results.artist);
        setTitle(results.title);
      });
  }, []);
  return { artist, title };
};


const useLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {   
    fetchLyrics(artist, title)
      .then(results => {
        console.log('song results are', results);
        setLyrics(results.lyrics);
      });
  }, []);
  return { lyrics };
};



const SongContainer = () => {

  const { song } = useParams();

  const { artist, title } = useArtistInfo(song);
  const { lyrics } = useLyrics(artist, title);

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
