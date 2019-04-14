import React from 'react';

import { Heart } from './styles'

const Icon = ({ name, color, onClick, isActive }) =>
	name === 'heart' &&
		<Heart color={color}
			onClick={onClick}
			isFavorite={isActive} />

export default Icon;
