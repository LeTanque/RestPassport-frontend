
// import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../actions/Restaurants';


// const initialState = {
//   savedRestaurants : [],
//   // isFetching  : true,
//   error       : ''

// };

// function UserData(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_USER_START:
//       return {
//         ...state,
//         // isFetching : true,
//         error      : 'You have not successfully fetched the restaurants!',
//       };
//     case FETCH_USER_SUCCESS:
//       return {
//         ...state,
//         savedRestaurants : action.payload,
//         // isFetching  : false,
//         error       : '',
//       };
//     case FETCH_USER_FAIL:
//       return {
//         ...state,
//         error : action.payload,
//       };

//     default:
//       return state;
//   }
// }


// export default UserData