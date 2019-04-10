import React from 'react';
import { connect } from 'react-redux';

import StyledInput from './styles';

import API from '../../services/api';

//import { fetchResults } from ''

class Search extends React.Component {
	onInputChange = async event => {
		 const results = await API.search(
			event.target.value,
			this.props.tab.toLocaleLowerCase().replace(/s$/, ''),
			this.props.authentication.token
		)
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

export default connect(mapStateToProps)(Search);
