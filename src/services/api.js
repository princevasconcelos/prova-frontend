const baseUrl = 'https://api.spotify.com';
const searchEndpoint = '/v1/search';

function searchSpotifyAPI(query, type, accessToken) {
  return fetch(
    `${baseUrl}${searchEndpoint}?q=${query}&type=${type}&access_token=${accessToken}`,
  ).then(response => response.json());
}

const API = {
  search: searchSpotifyAPI,
};

export default API;
