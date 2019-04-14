import React from 'react';

import ListItem from '../shared';

import { Heart } from '../shared/styles';

import { Title, Subtitle, About, SeeAlbums, Followers } from './styles'

import FavoriteImage from '../../FavoriteImage';
import Badge from '../../Badge';

const Artist = ({
	result: {
		popularity = 0,
		name = '',
		id = '',
		images = [],
		genres,
		followers: {
			total
		}
	},
	favoriteHandler = () => {},
	favorites = [],
	handleClick,
	clickable,

}) => {


	return (
		<ListItem type='card'>

		{ images.length > 0 &&
			<FavoriteImage
				favoriteHandler={() => favoriteHandler(id)}
				isActive={favorites.includes(id)}
				src={images[0].url}
				width="640"
				height="640"
				alt="Artist Image"
			/>
		}

		<About>
			<Title>
				{ name }
				<Badge value={popularity}></Badge>
			</Title>

			<Followers>{total} followers</Followers>

			<Subtitle>
				{ genres.map(genre => <li>{ '#' + genre }</li>) }
			</Subtitle>

			<SeeAlbums onClick={() => handleClick(name)}>
					Ver albums
			</SeeAlbums>

			{/* <Heart
				onClick={() => favoriteHandler(id)}
				isFavorite={favorites.includes(id)}
				color={images.length === 0 && 'black'}
			/> */}

		</About>
			</ListItem>
	)
}

export default Artist;
