import { combineReducers } from 'redux';

import tab from './tab';
import authentication from './authentication'
import results from './results'

export default combineReducers({
	tab,
	authentication,
	results
});
