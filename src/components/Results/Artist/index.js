import React from 'react';

import Result from '../shared';

import { Heart, Image } from '../shared/styles';

import { Title, Subtitle } from './styles'

const Artist = ({
	result: {
		popularity = 0,
		name = '',
		id = '',
		genres = [],
		images = []
	},
	favoriteHandler = () => {},
	favorites = []
}) =>
	<Result popularity={popularity} type='box'>
		<Title popularity={popularity}>
			{ name.substr(0, 12) }{ name.length > 12 && '...' }
		</Title>

		<Heart
			onClick={() => favoriteHandler(id)}
			isFavorite={favorites.includes(id)}
		/>

		<Subtitle popularity={popularity}>
			{ genres.join(', ') }
		</Subtitle>

		{ images.length > 0 &&
			<Image src={images[0].url} alt="Artist Image" /> }
	</Result>

export default Artist;
