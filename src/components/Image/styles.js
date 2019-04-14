import styled from 'styled-components';

import styles from '../../utils/constraint'

const StyledImage = styled.img`
	width: 100%;
	height: auto;

	@media (min-width: ${styles.screens.tablet}) {
		width: ${({ width }) => width || '640'}px;
		height: ${({ height }) => height || '640'}px;
  };
`

export default StyledImage;
