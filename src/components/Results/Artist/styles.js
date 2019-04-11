import styled from 'styled-components';

import styles from '../../../utils/constraint'

const Title = styled.h1`
	background-color: ${({ popularity }) => getPopularityColor(popularity)};
	position: absolute;
`

const Subtitle = styled.h2`
	color: ${({ popularity }) => getPopularityColor(popularity)};
	position: absolute;
	font-size : ${styles.sizes.small};
	bottom: 4px;
	right: 8px;
	padding-left: 10px;
`

const getPopularityColor = amount => {
	if (amount > 80) return `${styles.colors.popularity.hot}`;
	if (amount > 60) return `${styles.colors.popularity.cool}`;
	if (amount > 30) return `${styles.colors.popularity.regular}`;
	if (amount > 0) return `${styles.colors.popularity.underground}`
	return 'transparent';
}

export { Title, Subtitle }
