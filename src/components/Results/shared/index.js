import React from 'react';

import { StyledListItem } from './styles';

const ListItem = ({ children, type }) => <StyledListItem type={type}>{children}</StyledListItem>;

export default ListItem;
