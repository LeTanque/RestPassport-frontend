import {
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,
  SEARCH,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  ADD_REST_START,
  ADD_REST_SUCCESS,
  ADD_REST_FAIL,
  DEL_REST_START,
  DEL_REST_SUCCESS,
  DEL_REST_FAIL  
} from "../actions/Restaurants";

const initialState = {
  restaurants: [],
  savedRestaurants: [],
  isFetching: true,
  isFetchingSaved: false,
  error: "",
  search: "",
  addingRest: false,
  delRest: false
};

function RestaurantData(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_START:
      return {
        ...state,
        isFetching: true,
        error: "You have not successfully fetched the restaurants!"
      };
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload.body,
        isFetching: true,
        isFetchingSaved: true,
        error: ""
      };
    case FETCH_RESTAURANTS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
        restaurants: action.payload.filter(restaurant =>
          restaurant.name.includes(action.payload)
        )
      };
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
        error: "You have not successfully fetched the restaurants!"
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        savedRestaurants: action.payload,
        isFetching: false,
        isFetchingSaved: false,
        error: ""
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ADD_REST_START:
      return {
        ...state,
        addingRest: true,
        error: "You have not successfully added the restaurants!"
      };
    case ADD_REST_SUCCESS:
      return {
        ...state,
        savedRestaurants: action.payload,
        addingRest: false,
        error: ""
      };
    case ADD_REST_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case DEL_REST_START:
      return {
        ...state,
        delRest: true,
        error: "You have not successfully del the restaurants!"
      };
    case DEL_REST_SUCCESS:
      return {
        ...state,
        savedRestaurants: action.payload,
        delRest: false,
        error: ""
      };
    case DEL_REST_FAIL:
      return {
        ...state,
        error: action.payload
      };      
    default:
      return state;
  }
}
export default RestaurantData;


