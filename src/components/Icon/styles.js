import styled from 'styled-components';

import styles from '../../utils/constraint';

const Heart = styled.a`
	display: inline-block;
	width: 30px;
	height: 30px;
	position: absolute;
	right: 16px;
	top: 30px;
	margin: 0 10px;
	cursor: pointer;
	background-color: ${({ isFavorite, color }) => (isFavorite ? 'red' : `${color || styles.colors.white}`)};
	transform: rotate(-45deg);

	::before,
	::after {
		content: '';
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: ${({ isFavorite, color }) => (isFavorite ? 'red' : `${color || styles.colors.white}`)};
	}

	::before {
		top: -15px;
		left: 0;
	}

	::after {
		left: 15px;
		top: 0;
	}
`;

const Close = styled.a`
	position: absolute;
	cursor: pointer;
	right: 16px;
	top: 16px;
	width: 32px;
	height: 32px;
	opacity: 0.3;

	:hover {
		opacity: 1;
	}

	&:before,
	&:after {
		position: absolute;
		left: 15px;
		content: ' ';
		height: 33px;
		width: 2px;
		background-color: #333;
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}
`;

export { Heart, Close };
