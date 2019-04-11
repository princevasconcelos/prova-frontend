import React from 'react';
import { connect } from 'react-redux';

import { changeTab } from '../../store/ducks/tab';
import { saveData } from '../../store/ducks/results';

import Container from './styles'

import API from '../../services/api'

import Tab from './Tab';

class Tabs extends React.Component {
	handleChange = async value => {
		const { changeTab, query, authentication, saveData } = this.props;
		changeTab(value)
		if (query) {
			const type = value.toLowerCase();
			const results = await API.search(
				query,
				type.replace(/s$/, ''),
				authentication.token
			)
			saveData(results[type])
		}
	}

	render() {
		const { tab } = this.props;
		return (
			<Container>
				<Tab name="Artists" onClick={this.handleChange} selected={tab === 'Artists'} />
				<Tab name="Albums" onClick={this.handleChange} selected={tab === 'Albums'} />
				<Tab name="Tracks" onClick={this.handleChange} selected={tab === 'Tracks'} />
			</Container>
		)
	}
}

const mapStateToProps = ({ tab, query, authentication }) => ({
	tab,
	query,
	authentication
})

export default connect(
	mapStateToProps,
	{
		changeTab,
		saveData
	}
)(Tabs);
