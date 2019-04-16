import React from 'react';

import { Background, Container, Title, List } from './styles';

import API from '../../services/api';

import Album from '../Results/Album';
import Track from '../Results/Track';
import Icon from '../Icon';

class Modal extends React.Component {
	state = {
		data: [],
		apiType: '',
		error: null,
	};

	getApiExpectedTypeFromType = type => {
		return {
			artist: 'album',
			album: 'track',
		}[type];
	};

	async componentDidMount() {
		const {
			item: { itemSelected, token, type },
		} = this.props;
		const apiType = this.getApiExpectedTypeFromType(type);
		const result = await API.search(itemSelected, apiType, token);

		if (result.error) return this.setState({ error: true });
		this.setState({
			data: result[apiType + 's'].items.slice(0, 5),
			apiType,
		});
	}

	render() {
		const {
			item: { itemSelected },
			isOpen,
			handleClick,
			favoriteHandler,
			favorites,
		} = this.props;
		const { data, apiType, error } = this.state;

		return (
			<Background isOpen={isOpen}>
				<Container>
					<Title>{itemSelected}</Title>
					<List>
						{error && (
							<span>
								Seu token expirou.. reative na <a href="/">Página Inicial</a>
							</span>
						)}
						{data.length > 0 &&
							data.map(result => {
								if (apiType === 'album')
									return (
										<Album
											key={result.id}
											clickable={false}
											result={result}
											favoriteHandler={favoriteHandler}
											favorites={favorites}
										/>
									);

								if (apiType === 'track')
									return (
										<Track
											key={result.id}
											clickable={false}
											result={result}
											favoriteHandler={favoriteHandler}
											favorites={favorites}
										/>
									);
							})}
					</List>
					<Icon name="close" onClick={handleClick} />
				</Container>
			</Background>
		);
	}
}

export default Modal;
