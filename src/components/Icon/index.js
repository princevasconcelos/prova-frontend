import React from 'react';

import { Heart } from './styles'

const Icon = ({ name, onClick, isActive }) =>
	name === 'heart' && <Heart onClick={onClick} isFavorite={isActive} />

export default Icon;
