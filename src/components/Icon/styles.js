import styled from 'styled-components';

import styles from '../../utils/constraint';

const Heart = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
	position: absolute;
	right: 16px;
	top: 24px;
  margin: 0 10px;
	cursor: pointer;
  background-color: ${({ isFavorite, color }) => isFavorite ? 'red' : `${color ? color : styles.colors.white}`};
  transform: rotate(-45deg);

	::before,
	::after {
		content: "";
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: ${({ isFavorite, color }) => isFavorite ? 'red' : `${color ? color : styles.colors.white}`};
	}

	::before {
		top: -15px;
  	left: 0;
	}

	::after {
		left: 15px;
  	top: 0;
	}
`

export { Heart };
