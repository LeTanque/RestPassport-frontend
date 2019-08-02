import { combineReducers } from 'redux';

import RestaurantData from './Restaurants';

export default combineReducers({
	restaurants : RestaurantData,
});
