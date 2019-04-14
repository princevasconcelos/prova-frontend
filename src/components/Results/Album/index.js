import React from 'react';

import ListItem from '../shared';

import { Heart, Image } from '../shared/styles';

const Album = ({ result: { id, images, name }, handleClick, favorites, favoriteHandler }) =>
	<ListItem type="box">
		<Heart
			onClick={() => favoriteHandler(id)}
			isFavorite={favorites.includes(id)}
		/>

		<button onClick={() => handleClick(name)}>
				abrir modal
		</button>

		{ images.length > 0 && <Image src={images[0].url} alt="Album Logo" /> }
	</ListItem>

export default Album;
