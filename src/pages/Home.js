import React from 'react';
import { connect } from 'react-redux';

import Types from '../components/Types';
import Search from '../components/Search';
import Results from '../components/Results';

import { storeToken } from '../store/ducks/authentication';
import { fetchData } from '../store/ducks/results';

import FlexContainer from './styles';

class Home extends React.Component {
	componentDidMount() {
		const access_token = new URLSearchParams(window.location.search).get('access_token');
		if (access_token) {
			const { storeToken } = this.props;
			storeToken(access_token);
		}
	}

	getData = async (query, type, token) => {
		if (query && type && token) {
			this.props.fetchData({ query, type, token });
		}
	};

	render() {
		return (
			<FlexContainer>
				<Types getData={this.getData} />
				<Search getData={this.getData} />
				<Results />
			</FlexContainer>
		);
	}
}

export default connect(
	null,
	{
		storeToken,
		fetchData,
	},
)(Home);
