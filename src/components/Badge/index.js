import React from 'react';

import StyledBadge from './styles'

import { getPopularityByValue } from '../../utils';

const Badge = ({ value }) => {
	const popularity = getPopularityByValue(value);

	return <StyledBadge color={popularity.color}>{ popularity.name }</StyledBadge>
}

export default Badge;



