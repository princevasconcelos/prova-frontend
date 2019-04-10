import { combineReducers } from 'redux';

import tab from './tab';
import authentication from './authentication'

export default combineReducers({
	tab,
	authentication
});
