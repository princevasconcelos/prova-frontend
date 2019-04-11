import React from 'react';
import { connect } from 'react-redux';

import StyledInput from './styles';

import API from '../../services/api';

import { saveData } from '../../store/ducks/results';
import { saveQuery } from '../../store/ducks/query';
import { tokenNotFound } from '../../store/ducks/authentication'

class Search extends React.Component {
	onInputChange = async event => {
		const query = event.target.value
		if (query) {
			let { tab, authentication, saveData, saveQuery, tokenNotFound } = this.props;
			tab = tab.toLowerCase();

			const results = await API.search(
				query,
				tab.replace(/s$/, ''),
				authentication.token
			)

			if (results.error) {
				return tokenNotFound()
			}

			saveData(results[tab])
			saveQuery(query)
		}
	}

	render() {
		return (
			<StyledInput
				type="text"
				placeholder='Search for artists, albums or tracks'
				onChange={this.onInputChange} />
		)
	}
}

const mapStateToProps = ({ tab, authentication }) => ({
	tab,
	authentication
})

export default connect(mapStateToProps, {
	saveData,
	saveQuery,
	tokenNotFound
})(Search);
