import { combineReducers } from 'redux';

import tab from './tab';
import authentication from './authentication';
import results from './results';
import favorites from './favorites';
import query from './query';

export default combineReducers({
	tab,
	authentication,
	results,
	favorites,
	query
});
