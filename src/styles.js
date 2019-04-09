import styled, { createGlobalStyle } from 'styled-components';

import styles from './utils/constraint';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Muli:200,400,600,700');

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
		font-family: 'Muli';
	}
`

export { GlobalStyle };
