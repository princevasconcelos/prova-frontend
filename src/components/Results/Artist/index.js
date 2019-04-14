import React from 'react';

import ListItem from '../shared';

import { Title, Subtitle, About, SeeAlbums, Followers } from './styles'

import FavoriteImage from '../../FavoriteImage';
import Badge from '../../Badge';
import Button from '../../Button';

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
}) =>
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
				{ genres.map(genre => <li key={genre}>{ '#' + genre }</li>) }
			</Subtitle>
			<Button onClick={() => handleClick(name)}>
				Ver albums
			</Button>
		</About>
	</ListItem>

export default Artist;
