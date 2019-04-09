import styled, { createGlobalStyle } from 'styled-components';

import styles from './utils/constraint';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		height: 100%;
	}

  body {
		background-image: linear-gradient(to right bottom, rgb(70, 77, 83), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
		background-repeat: no-repeat;
	}
`

export { GlobalStyle };


//background-image: linear-gradient(to right bottom, rgb(70, 77, 83), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
