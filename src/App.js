import React, { Component } from 'react';

import { GlobalStyle } from './styles'
//import API from './services/api';
import Tabs from './components/Tabs';

class App extends Component {

  componentDidMount() {
    //API.search('zeppelin', 'artist')
  }

  render() {
    return (
			<>
				<GlobalStyle />
				<Tabs />
			</>
    );
  }
}

export default App;
