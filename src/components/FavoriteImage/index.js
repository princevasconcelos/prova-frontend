import React from 'react';

import Icon from '../Icon';
import Image from '../Image';

import { ChildrenContent, RelativeWrapper } from './styles';

const FavoriteImage = ({ width, height, src, alt, favoriteHandler, isActive, children }) =>
	<RelativeWrapper>
		<Image width={width} height={height} src={src} alt={alt} />
		<Icon name="heart" onClick={favoriteHandler} isActive={isActive} />
		<ChildrenContent>
			{ children }
		</ChildrenContent>
	</RelativeWrapper>

export default FavoriteImage;
