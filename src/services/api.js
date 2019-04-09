const baseUrl = 'https://api.spotify.com'
const searchEndpoint = '/v1/search'
const accessToken = 'BQDwLR_NCAbeDHS_5ap85BSXppslELG2gFRu_2hZXcmweYrStidnU3-A7bjw7FR7Kvly7lKOq63qko_eIz12ql80LuGO65sFUL_PMcINoiwjRGdXdP23M3XjMRB34b0hDZL1KOl0nQh-5RPOQdfdqC7nFz4Zcz9TACyaVGOjLxK0AqQiiQ'

function searchSpotifyAPI(query, type) {
	return fetch(`${baseUrl}${searchEndpoint}?q=${query}&type=${type}&access_token=${accessToken}`)
		.then(response => response.json())
}

const API = {
	search: searchSpotifyAPI
}

export default API
