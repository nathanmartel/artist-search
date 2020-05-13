import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArtistInfoBySongId, fetchLyrics, fetchLyricsBySongId } from '../../services/services';


// Alternate way to skin the cat with two custom hooks
//
// const useArtistInfo = (song) => {
//   const [artist, setArtist] = useState('');
//   const [title, setTitle] = useState('');

//   useEffect(() => {   
//     fetchArtistInfoBySongId(song)
//       .then(results => {
//         console.log('artistInfo results are', results);
//         setArtist(results.artist);
//         setTitle(results.title);
//       });
//   }, []);
//   return { artist, title };
// };

// const useLyrics = (artist, title) => {
//   const [lyrics, setLyrics] = useState([]);

//   useEffect(() => {   
//     if(artist !== '' && title != '')
//       fetchLyrics(artist, title)
//         .then(results => {
//           console.log('song results are', results);
//           setLyrics(results.lyrics);
//         });
//   }, [title]);
//   return { lyrics };
// };


const SongContainer = () => {

  const { song } = useParams();
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {   
    fetchLyricsBySongId(song)
      .then(results => {
        console.log('song results are', results);
        setLyrics(results.lyrics);
      });
  }, []);


  return (
    <>
      {lyrics && 
        <pre>
          {lyrics}
        </pre> 
      }

    </>
  );
};

export default SongContainer;
