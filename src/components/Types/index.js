import React from 'react';
import { connect } from 'react-redux';

import { changeType } from '../../store/ducks/type';

import Tabs from './styles'

import Type from './Type';

const Types = ({
	query, type, authentication: { token }, getData, changeType
}) => {
	async function handleTypeChange(newType) {
		changeType(newType);
		getData(query, newType, token);
	}
	return (
		<Tabs>
			<Type name="Artists"
				onClick={handleTypeChange}
				type="artist"
				selected={type === 'artist'} />

			<Type name="Albums"
				onClick={handleTypeChange}
				type="album"
				selected={type === 'album'} />

			<Type name="Tracks"
				onClick={handleTypeChange}
				type="track"
				selected={type === 'track'} />
		</Tabs>
	)
}

const mapStateToProps = ({ query, type, authentication }) => ({
	query,
	type,
	authentication
})

export default connect(
	mapStateToProps,
	{
		changeType,
	}
)(Types);
