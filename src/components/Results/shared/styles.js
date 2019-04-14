import styled from 'styled-components';

import styles from '../../../utils/constraint'

const Image = styled.img`
	width: 300px;
	height: 300px;
`

const Heart = styled.a`
	position: absolute;
	cursor: pointer;
	right: 8px;
	top: 16px;
  background-color: ${({ isFavorite, color }) => isFavorite ? 'red' : `${color ? color : styles.colors.white}`};
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  transform: rotate(-45deg);
  width: 30px;

	::before,
	::after {
		content: "";
		background-color: ${({ isFavorite, color }) => isFavorite ? 'red' : `${color ? color : styles.colors.white}`};
		border-radius: 50%;
		height: 30px;
		position: absolute;
		width: 30px;
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

const StyledListItem = styled.div`

	width: ${({ type }) => type && getSizeByType(type).width};
	height: ${({ type }) => type && getSizeByType(type).height};
	margin: 20px 0;

	position: relative;

	${({ type }) => type === 'row' && `

	`}

	${({ type }) => type === 'row' && `
		display: flex;
		align-items: center;
		box-shadow: 0 4px 6px -6px ${styles.colors.darkestGray};
	`}

	${({ type }) => type === 'card' && `
		background-color: ${styles.colors.lightestBlue};
		display: flex;
		flex-direction: column;

		@media (min-width: ${styles.screens.tablet}) {
			flex-direction: row;
  	};
	`}
`

const getSizeByType = (type = 'box') => {
	const sizes = {
		row: {
			width: '100%',
			height: '80px'
		},
		box: {
			width: '300px',
			height: '300px'
		},
		card: {
			width: '100%',
			height: 'auto;'
		}
	}
	return sizes[type]
}


export { Image, Heart, StyledListItem }
