import React from 'react';

import { ListItem } from './styles'

const Result = ({
	children,
	type,
	clickable = true,
	handleClick
}) =>
	<ListItem type={type} clickable={clickable} onClick={handleClick}>
		{ children }
	</ListItem>

export default Result;
