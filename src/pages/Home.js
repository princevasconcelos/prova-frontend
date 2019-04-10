import React from 'react';
import { connect } from 'react-redux'

import Tabs from '../components/Tabs';
import Search from '../components/Search';
import Results from '../components/Results';
import Login from '../components/Login';

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
		const { authentication: { isAuthenticated } } = this.props;
		return (
			<FlexContainer isAuthenticated={isAuthenticated}>
				<Tabs />
				<Login isAuthenticated={isAuthenticated} />
				<Search />
				<Results />
		</FlexContainer>
		)
	}
}

const mapStateToProps = ({ authentication, authenticate }) => ({
	authentication,
	authenticate
})

export default connect(mapStateToProps, {
	authenticate
})(App);
