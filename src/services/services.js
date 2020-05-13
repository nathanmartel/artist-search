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

export const fetchArtistInfoBySongId = (songId) => {
  return fetch(`https://musicbrainz.org/ws/2/recording/${songId}?inc=artist-credits&fmt=json`)
    .then(res => res.json())
    .then(json => ({
      id: json.id,
      artist: json['artist-credit'][0].artist.name,
      title: json.title
    }));
};

export const fetchLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json());
};

export const fetchLyricsBySongId = (songId) => {
  return fetch(`https://musicbrainz.org/ws/2/recording/${songId}?inc=artist-credits&fmt=json`)
    .then(res => res.json())
    .then(json => ({
      id: json.id,
      artist: json['artist-credit'][0].artist.name,
      title: json.title
    }))
    .then(obj => fetchLyrics(obj.artist, obj.title));
};

