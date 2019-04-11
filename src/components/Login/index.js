import React from 'react';

import { StyledButton, SpotifyIcon } from './styles'

const Login = ({ isAuthenticated }) => (
	!isAuthenticated && (
		<StyledButton onClick={() => window.location = 'https://spotify-api-bridge.herokuapp.com/login'}>
			Sign in with Spotify <SpotifyIcon alt='Login Spotify' src="spotify-icon.png" />
		</StyledButton>
	)
)

export default Login;
