import React from 'react';

import Result from '../shared';

import { Heart, Image } from '../shared/styles';

import Modal from '../../Modal'

class Album extends React.Component {
	state = {
		showModal: false
	}

	handleClick = () => this.setState({ showModal: !this.state.showModal })

	render() {
		const {
			result: {
				id = '',
				images = []
			},
			favoriteHandler = () => {},
			favorites = []
		} = this.props;

		return (
			<>
				<Result handleClick={this.handleClick}>
					<Heart
						onClick={() => favoriteHandler(id)}
						isFavorite={favorites.includes(id)}
					/>

					{ images.length > 0 &&
						<Image src={images[0].url} alt="Album Logo" /> }
				</Result>
				<Modal isOpen={this.state.showModal}>ola prince</Modal>
			</>
		)
	}
}

export default Album;
