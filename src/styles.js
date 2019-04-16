import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Muli:200,400,600,700');

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		height: 100%;
	}

  body {
		font-family: 'Muli';
		font-size: 14px;
	}
`;

export { GlobalStyle };
