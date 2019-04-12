import React from 'react';
import { connect } from 'react-redux';

import { Resultlist, Total, LoginMessage } from './styles'

import Login from '../Login'

import Album from './Album';
import Artist from './Artist';
import Track from './Track';

import { favoriteHandler } from '../../store/ducks/favorites'

const Results = ({
	authentication: { isAuthenticated },
	results,
	favoriteHandler,
	favorites,
	type,
	query
}) => isAuthenticated
 	? <>
	 		{console.log('<Results />')}
			{query &&
				<Total>
					{ results.data.length > 0
						? `Exibindo ${results.data.length} de ${results.total} resultados para ${query}`
						: `Nenhum resultado foi encontrado`
				}
				</Total>
			}
 			<Resultlist type={type}>
				{results.data.map(result => {
					if (type === 'artist'&& result.type === 'artist') return <Artist key={result.id} result={result} favoriteHandler={favoriteHandler} favorites={favorites} />
					if (type === 'album' && result.type === 'album') return <Album result={result} key={result.id} favoriteHandler={favoriteHandler} favorites={favorites} />
					if (type === 'track' && result.type === 'track') return <Track result={result} key={result.id} favoriteHandler={favoriteHandler} favorites={favorites} />
				})}
			</Resultlist>
		</>
 : <>
			{query && <LoginMessage>Faça login para começar</LoginMessage>}
 			<Login isAuthenticated={isAuthenticated}/>
	 </>

const mapStateToProps = ({ authentication, results, favorites, type, query }) => ({
	authentication,
	results,
	favorites,
	type,
	query
})

export default connect(mapStateToProps, {
	favoriteHandler
})(Results);
