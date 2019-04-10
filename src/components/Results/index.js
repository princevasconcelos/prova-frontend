import React from 'react';
import { connect } from 'react-redux';

import { SigninMessage } from './styles'

const Results = ({ authentication }) => authentication.isAuthenticated
 ? <h1>Start typing to search</h1>
 : <SigninMessage>You need to Sign in first</SigninMessage>

const mapStateToProps = ({ authentication }) => ({
	authentication
})

export default connect(mapStateToProps)(Results);
