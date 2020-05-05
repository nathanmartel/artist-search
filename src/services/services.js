export const fetchSearch = (query, limit, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=${limit}&offset=${page * limit}`)
    .then(res => res.json());
};

export const fetchReleases = (query, limit, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${query}&fmt=json&limit=${limit}&offset=${page * limit}`)
    .then(res => res.json());
};
