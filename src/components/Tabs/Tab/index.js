import React from 'react';

import StyledTab from './styles';

const Tab = ({ name, selected }) =>
	<StyledTab href="#" selected={selected}>{name}</StyledTab>

export default Tab;
