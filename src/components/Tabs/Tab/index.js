import React from 'react';

import StyledTab from './styles';

const Tab = ({ name, selected, onClick }) =>
<StyledTab onClick={() => onClick(name)} selected={selected}>{name}</StyledTab>

export default Tab;
