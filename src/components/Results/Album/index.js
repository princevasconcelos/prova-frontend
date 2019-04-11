import React from 'react';

import Result from '../shared';

import { Heart, Image } from '../shared/styles';

const Album = ({
	result: {
		id = '',
		images = []
	},
	favoriteHandler = () => {},
	favorites = []
}) =>
	<Result>
		<Heart
			onClick={() => favoriteHandler(id)}
			isFavorite={favorites.includes(id)}
		/>

		{ images.length > 0 &&
			<Image src={images[0].url} alt="Album Logo" /> }
	</Result>

export default Album;
