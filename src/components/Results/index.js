import React from 'react';
import { connect } from 'react-redux';

import Resultlist from './styles'

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
	tab
}) => isAuthenticated
 ? <Resultlist type={tab}>
		{results.data.map(result => {
			if (tab === 'Artists'&& result.type === 'artist') return <Artist key={result.id} result={result} favoriteHandler={favoriteHandler} favorites={favorites} />
			if (tab === 'Albums' && result.type === 'album') return <Album result={result} key={result.id} favoriteHandler={favoriteHandler} favorites={favorites} />
			if (tab === 'Tracks' && result.type === 'track') return <Track result={result} key={result.id} favoriteHandler={favoriteHandler} favorites={favorites} />
		})}
 	</Resultlist>
 : <Login isAuthenticated={isAuthenticated}/>

const mapStateToProps = ({ authentication, results, favorites, tab }) => ({
	authentication,
	results,
	favorites,
	tab
})

export default connect(mapStateToProps, {
	favoriteHandler
})(Results);
