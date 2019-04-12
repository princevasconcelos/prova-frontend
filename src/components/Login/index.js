import React from 'react';

import { SpotifyButton, SpotifyIcon } from './styles';

const url = 'https://spotify-api-bridge.herokuapp.com/login';

const Login = ({ isAuthenticated }) =>
	!isAuthenticated &&
		<SpotifyButton
			onClick={() => window.location = url }>
			{console.log('<LOGIN />')}
			Sign in with Spotify
			<SpotifyIcon alt='Login Spotify' src="spotify-icon.png" />
		</SpotifyButton>

export default Login;
