import styled from 'styled-components';

import styles from '../../utils/constraint';

const Background = styled.div`
	display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	overflow-y: scroll;
	overflow-x: hidden;
	position: fixed;
	background: white;
	padding: 16px 10px;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (min-width: ${styles.screens.tablet}) {
    width: 65%;
		height: auto;
  };


`

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

	&:before, &:after {
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
`

const Title = styled.h1`
	font-size: 24px;
	margin-right: 32px;
`

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 12px;

	@media (max-width: ${styles.screens.tablet}) {
		justify-content: center;
  };
`

export { Background, Container, Close, Title, List }
