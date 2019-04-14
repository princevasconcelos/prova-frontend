import React from 'react';

import Icon from '../Icon';
import Image from '../Image';

const FavoriteImage = ({ width, height, src, alt, favoriteHandler, isActive }) =>
	<div style={{ position: 'relative' }}>
		<Image width={width} height={height} src={src} alt={alt} />
		<Icon name="heart" onClick={favoriteHandler} isActive={isActive} />
	</div>

export default FavoriteImage;
