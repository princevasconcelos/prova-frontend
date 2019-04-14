import styled from 'styled-components';

import styles from '../../utils/constraint'

const StyledImage = styled.img`
	width: 100%;
	height: auto;
	background-color: yellow;

	@media (min-width: ${styles.screens.tablet}) {
		width: ${({ width }) => width || '640'}px;
		height: ${({ height }) => height || '640'}px;
		background-color: green;
  };
`

export default StyledImage;
