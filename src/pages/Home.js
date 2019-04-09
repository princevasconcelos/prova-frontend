import React, { Component } from 'react';

//import API from './services/api';
import Tabs from '../components/Tabs';

class App extends Component {

  componentDidMount() {
    //API.search('zeppelin', 'artist')
  }

  render() {
    return (
			<>
				<Tabs />
			</>
    );
  }
}

export default App;
