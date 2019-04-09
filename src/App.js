import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Home from './pages/Home';
import { GlobalStyle } from './styles'

const App = () => (
	<Provider store={store}>
		<GlobalStyle />
		<Home />
	</Provider>
)

export default App;
