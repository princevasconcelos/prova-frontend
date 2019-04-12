import React from 'react';

import { Background, Container } from './styles'

const Modal = ({ children, isOpen }) =>
	<Background isOpen={isOpen}>
		{console.log('<Modal />')}
		<Container>
			{ children }
		</Container>
	</Background>

export default Modal;
