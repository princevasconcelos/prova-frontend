import React from 'react';

import { Heart, Close } from './styles'

const Icon = ({ name, color, onClick, isActive }) => {
	if (name === 'heart') return (
		<Heart color={color}
			onClick={onClick}
			isFavorite={isActive} />
	)
	if (name === 'close') return (
		<Close onClick={onClick} />
	)
	return <></>
}

export default Icon;
