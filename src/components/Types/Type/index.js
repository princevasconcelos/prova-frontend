import React from 'react';

import StyledLink from './styles';

const Type = ({ name, selected, onClick, type }) =>
	<StyledLink
		onClick={() => onClick(type)}
		selected={selected}
	>
		{name}
	</StyledLink>

export default Type;
