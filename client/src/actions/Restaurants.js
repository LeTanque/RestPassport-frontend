import axios from 'axios';
import { axiosWithAuth } from '../authentication/axiosWithAuth';

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAIL = 'FETCH_RESTAURANTS_FAIL';
export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_RESTAURANTS_FAIL';

export const ADD_REST_START = 'ADD_REST_START';
export const ADD_REST_SUCCESS = 'ADD_REST_SUCCESS';
export const ADD_REST_FAIL = 'ADD_REST_FAIL';

export const DEL_REST_START = 'DEL_REST_START';
export const DEL_REST_SUCCESS = 'DEL_REST_SUCCESS';
export const DEL_REST_FAIL = 'FETCH_REST_FAIL';

export const getRestaurants = () => dispatch => {
	dispatch({ type: FETCH_RESTAURANTS_START });
	axios
		.get('https://restaurant-app-appi.herokuapp.com/api/v1/restaurants')
		.then(res => {
			dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_RESTAURANTS_FAIL, payload: err }));
};

export const SEARCH = 'SEARCH';

export const searchPosts = payload => {
	return { type: SEARCH, payload };
};

export const getVisited = userId => dispatch => {
	dispatch({ type: FETCH_USER_START });
	axiosWithAuth()
		.get(`https://restaurant-app-appi.herokuapp.com/api/v1/${userId}/passports`)
		.then(res => {
			console.log("getVisited action response:", res)
			dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err }));
};

export const addVisited = id => dispatch => {
	dispatch({ type: ADD_REST_START });
	return axiosWithAuth()
		.post(`https://restaurant-app-appi.herokuapp.com/api/v1/restaurants/${id}/visited`)
		.then(res => {
			dispatch({
				type    : ADD_REST_SUCCESS,
				payload : res.data,
			});
		})
		.catch(err => {
			dispatch({
				type    : ADD_REST_FAIL,
				payload : err,
			});
		});
};

export const delVisited = id => dispatch => {
	dispatch({ type: DEL_REST_START });
	return axiosWithAuth()
		.delete(`https://restaurant-app-appi.herokuapp.com/api/v1/restaurants/${id}/visited`)
		.then(res => {
			dispatch({
				type    : DEL_REST_SUCCESS,
				payload : res.data,
			});
		})
		.catch(err => {
			dispatch({
				type    : DEL_REST_FAIL,
				payload : err,
			});
		});
};
