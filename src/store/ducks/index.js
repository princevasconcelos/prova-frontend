import { combineReducers } from 'redux';

import type from './type';
import authentication from './authentication';
import results from './results';
import favorites from './favorites';
import query from './query';

export default combineReducers({
	type,
	authentication,
	results,
	favorites,
	query
});
