import React from 'react';
import { connect } from 'react-redux';

import { Resultlist, TotalMessage, LoginMessage } from './styles'

import Login from '../Login'
import Album from './Album';
import Artist from './Artist';
import Track from './Track';
import Modal from '../Modal'

import { favoriteHandler } from '../../store/ducks/favorites'

class ResultsList extends React.Component {
	state = {
		showModal: false,
		itemSelected: ''
	}

	toggleModal = itemName =>
		this.setState({
			showModal: !this.state.showModal,
			itemSelected: this.state.itemSelected ? '' : itemName
		})

	render() {
		const {
			authentication: {
				isAuthenticated,
				token
			},
			results: {
				data, total, loading, error
			},
			favorites,
			type,
			query,
			favoriteHandler
		} = this.props;

		const { itemSelected } = this.state;

		return (
			isAuthenticated
				? <>
						{ error && <span>token expirou</span>}
						{ loading && <span>Carregando...</span>}
						{ query && !loading &&
							<TotalMessage>
								{ data.length > 0
									? `Exibindo ${data.length} de ${total} resultados para ${query}`
									: `Nenhum resultado foi encontrado`
								}
							</TotalMessage>
						}

						{ itemSelected &&
							<Modal isOpen={this.state.showModal}
								handleClick={this.toggleModal}
								favoriteHandler={favoriteHandler}
								favorites={favorites}
								item={{
									itemSelected,
									type,
									token
								}} />
						}
						<Resultlist type={type}>
							{data.map(result => {
								if (type === 'artist' && result.type === 'artist') return (
									<Artist key={result.id}
										result={result}
										clickable={true}
										handleClick={this.toggleModal}
										favoriteHandler={favoriteHandler}
										favorites={favorites} />
								)
								if (type === 'album' && result.type === 'album') return (
									<Album key={result.id}
										result={result}
										handleClick={this.toggleModal}
										favoriteHandler={favoriteHandler}
										favorites={favorites} />
								)
								if (type === 'track' && result.type === 'track') return (
									<Track key={result.id}
										result={result}
										favoriteHandler={favoriteHandler}
										favorites={favorites} />
								)
							})}
						</Resultlist>
					</>
			: <>
						{query && <LoginMessage>Faça login para começar</LoginMessage>}
						<Login isAuthenticated={isAuthenticated}/>
				</>
		)
	}
}

const mapStateToProps = ({ authentication, results, favorites, type, query }) => ({
	authentication,
	results,
	favorites,
	type,
	query
})

export default connect(mapStateToProps, {
	favoriteHandler
})(ResultsList);
