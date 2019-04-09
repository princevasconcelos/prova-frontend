import React from 'react';
import { connect } from 'react-redux';

import StyledInput from './styles';

import API from '../../services/api';

class Search extends React.Component {

	onInputChange = event => {
		const input = event.target.value;
		if (input.length <= 2) return;
		alert('start seraching')
		API.search(input, this.props.tab)
	}

	render() {
		const { tab } = this.props
		return (
			<StyledInput type="text"
				ref={input => this.input = input}
				placeholder={!!tab
					? `Search ${tab}`
					: 'Search Artists, Albums or Tracks.'}
				onChange={this.onInputChange} />
		)
	}
}

const mapStateToProps = ({ tab }) => ({
	tab
})

export default connect(mapStateToProps)(Search);
