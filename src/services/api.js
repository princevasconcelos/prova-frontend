const baseUrl = 'https://api.spotify.com';
const searchEndpoint = '/v1/search';
const accessToken = '';

const CLIENT_ID = '4b814332dcc04fb1aa099e6b0f1653ac';
//const CLIENT_SECRET = 'd639c931f1fb42c7afb19b737a9d2605';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPE = 'user-read-private%20user-read-email';

function searchSpotifyAPI(query, type) {
	return fetch(`${baseUrl}${searchEndpoint}?q=${query}&type=${type}&access_token=${accessToken}`)
		.then(response => response.json())
}

function getToken() {
	return fetch(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&state=123`)
		.then(response => response.json())
		//.then(data => console.log(data))
}

const API = {
	search: searchSpotifyAPI,
	authenticate: getToken
}

export default API
