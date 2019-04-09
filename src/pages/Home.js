import React from 'react';

import Tabs from '../components/Tabs';
import Search from '../components/Search';
import Results from '../components/Results';
import Login from '../components/Login';

import FlexContainer from './styles'

const App = () => {
	return (
		<FlexContainer>
			<Tabs />
			<Login />
			<Search />
			{/* <Results /> */}
		</FlexContainer>
	);
}

export default App;
