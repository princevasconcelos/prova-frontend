import React from 'react';

import { ListItem } from './styles'

const Result = ({
	children,
	type,
	clickable = true
}) =>
	<ListItem type={type} clickable={clickable} onClick={() => console.log('23')}>
		{ children }
	</ListItem>

export default Result;
