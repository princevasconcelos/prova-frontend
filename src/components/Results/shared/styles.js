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

const ListItem = styled.div`
	position: relative;
	cursor: ${({ clickable }) => clickable && 'pointer'};
	width: ${({ type }) => type && getSizeByType(type).width};
	height: ${({ type }) => type && getSizeByType(type).height};
	margin: 20px;

	${({ type }) => type === 'row' && `
		display: flex;
		align-items: center;
	`}
`

const getSizeByType = (type = 'box') => {
	const sizes = {
		row: {
			width: '100%',
			height: '64px'
		},
		box: {
			width: '300px',
			height: '300px'
		}
	}
	return sizes[type]
}


export { Image, Heart, ListItem }
