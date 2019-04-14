import React from 'react';

import StyledImage from './styles';

const Image = ({ width, height, src, alt }) =>
	<StyledImage src={src}
		width={width}
		height={height} 
		alt={alt} />

export default Image;
