import React, { Component } from 'react';

import { GlobalStyle } from './styles'
//import API from './services/api';

class App extends Component {

  componentDidMount() {
    //API.search('zeppelin', 'artist')
  }

  render() {
    return (
			<>
				<GlobalStyle />
			</>
    );
  }
}

export default App;
