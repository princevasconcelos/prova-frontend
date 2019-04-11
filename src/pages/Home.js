import React from 'react';
import { connect } from 'react-redux'

import Tabs from '../components/Tabs';
import Search from '../components/Search';
import Results from '../components/Results';

import { authenticate } from '../store/ducks/authentication'

import FlexContainer from './styles'

class App extends React.Component {
	componentDidMount() {
		const access_token = new URLSearchParams(window.location.search).get('access_token');
		if (access_token) {
			const { authenticate } = this.props;
			authenticate(access_token)
		}
	}

	render() {
		return (
			<FlexContainer>
				<Tabs />
				<Search />
				<Results />
			</FlexContainer>
		)
	}
}

export default connect(null, {
	authenticate
})(App);
