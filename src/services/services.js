export const fetchSearch = (query, limit = 10, page = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=${limit}&offset=${page * limit}`)
    .then(res => res.json());
};

export const fetchReleases = (query, limit = 10, page = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${query}&fmt=json&limit=${limit}&offset=${page * limit}`)
    .then(res => res.json());
};

export const fetchTracks = (query, limit = 10, page = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${query}&fmt=json`)
    .then(res => res.json());
};
