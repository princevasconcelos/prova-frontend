import React from 'react';
import { connect } from 'react-redux';

import StyledInput from './styles';

import API from '../../services/api';

import { saveResults } from '../../store/ducks/results'

class Search extends React.Component {
	onInputChange = async event => {
		let { tab, authentication } = this.props;
		tab = tab.toLowerCase();
		const results = await API.search(
			event.target.value,
			tab.replace(/s$/, ''),
			authentication.token
		)
		this.props.saveResults(results[tab])
	}

	render() {
		return (
			<StyledInput
				type="text"
				placeholder='Search Artists, Albums or Tracks.'
				onChange={this.onInputChange} />
		)
	}
}

const mapStateToProps = ({ tab, authentication }) => ({
	tab,
	authentication
})

export default connect(mapStateToProps, {
	saveResults
})(Search);
