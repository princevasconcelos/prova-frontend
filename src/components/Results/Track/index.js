import React from 'react';

import ListItem from '../shared';

import { millisToMinutesAndSeconds } from '../../../utils'

import { Heart } from '../shared/styles'

import { Thumbnail, FlexWrapper, Title, Subtitle, Duration } from './styles'

const Track = ({
	result: {
		album,
		name,
		artists,
		id,
		duration_ms
	},
	favoriteHandler,
	favorites = [],
}) =>
	<>
		<ListItem type="row" clickable={false}>
			{ album.images.length > 0 &&
				<Thumbnail src={
					(album.images[2] || {}).url ||
					(album.images[1] || {}).url ||
					(album.images[0] || {}).url
					}
				alt="Track Image" /> }
			<FlexWrapper>
				<Title>
					{ name } <span> - </span>
					{ artists.length > 0 && <b>{ artists[0].name }</b> }
				</Title>

				<Subtitle>
					{ album.name }
				</Subtitle>

				<Heart
					color="lightGray"
					onClick={() => favoriteHandler(id)}
					isFavorite={favorites.includes(id)}
				/>

				<Duration>{ millisToMinutesAndSeconds(duration_ms) }</Duration>
			</FlexWrapper>
		</ListItem>

	</>

export default Track;
