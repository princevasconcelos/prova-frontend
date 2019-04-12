import styled from 'styled-components';

const Background = styled.div`
	display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
`

const Container = styled.div`
	position: fixed;
	background: white;
	width: 80%;
	min-height: 200px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export { Background, Container}
