import styled from 'styled-components';

import styles from '../../../utils/constraint'

const Title = styled.h1`
	font-size: ${styles.sizes.xlarge};
`

const Subtitle = styled.ul`
	font-size: 24px;
	margin: 12px 0;
`

const About = styled.div`
	width: auto;
	height: auto;
	margin: 15px;
`

const Followers = styled.span`

`

const SeeAlbums = styled.button`
	display: block;
	margin: 0 auto;
	cursor: pointer;
	border-radius: 1000px;
	border: none;
	outline: none;
	padding: 12px 24px;
	color: white;
	font-size: 24px;
	background-color: ${styles.colors.darkBlue};

	:hover {
		opacity: 0.8;
	}

	@media (min-width: ${styles.screens.tablet}) {
		margin: 16px 0;
  };
`

export { Title, Subtitle, About, SeeAlbums, Followers }
