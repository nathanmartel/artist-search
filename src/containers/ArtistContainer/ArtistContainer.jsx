import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReleasesList from '../ReleasesList/ReleasesList';
import { fetchReleases } from '../../services/services';

const ArtistContainer = () => {

  const { artist } = useParams();
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(null);
  const [releases, setReleases] = useState([]);
  

  useEffect(() => {
    fetchReleases(artist, limit, page)
      .then(results => {
        // Use bracket notation to target JSON key with a dash
        setTotalResults(results['release-count']);
        setReleases(results.releases);
      });
  }, [page]);

  return (
    <>
      <ReleasesList releases={releases} />
      { totalResults && 
      <div>
        {totalResults} results
        <br />
        <button onClick={() => { setPage(prevPage => prevPage - 1); }} disabled={page < 1}>&lt;</button>
        { Number(page) + 1 } of { Math.ceil(totalResults / limit) } 
        <button onClick={() => { setPage(prevPage => prevPage + 1); }} disabled={(page + 1) * limit > totalResults}>&gt;</button>
      </div>
      }
    </>
  );
};

export default ArtistContainer;
