import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';

const initialState = {
	mapData      : [],
	loggingIn    : false,
	error        : null,
	loading      : true,
	token        : localStorage.getItem('token'),
	fetchingData : false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			console.log('Store', state);
			console.log('Action', action);
			return {
				...state,
				loggingIn : true,
				error     : false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn : false,
				error     : false,
				token     : localStorage.getItem('token'),
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loggingIn : false,
				error     : action.payload,
			};
		case SIGNUP_START:
            console.log('Store', state);
			console.log('Action', action);
			return {
				...state,
				loggingIn : true,
				error     : false,
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				loggingIn : false,
				error     : false,
				token     : localStorage.getItem('token'),
			};
		case SIGNUP_FAILURE:
			return {
				...state,
				loggingIn : false,
				error     : action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
