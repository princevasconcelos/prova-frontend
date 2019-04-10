import React from 'react';
import { connect } from 'react-redux';

import { SigninMessage } from './styles'

const Results = ({ authentication: { isAuthenticated }, results }) => isAuthenticated
 ? <ul>
	 {results.data.map(result => <li>{result.name}</li>)}
 </ul>
 : <SigninMessage>You need to Sign in first</SigninMessage>

const mapStateToProps = ({ authentication, results }) => ({
	authentication,
	results
})

export default connect(mapStateToProps)(Results);
