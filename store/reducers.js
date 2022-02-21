/* eslint-disable default-param-last */
import {
  LOAD_SCHOLARSHIPS,
  LOAD_SCHOLARSHIPS_PENDING,
  SHOW_SCHOLARSHIP,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER_FROM_ASYNCSTORAGE,
} from './types';

const initiialState = {
  scholarships: [],
  scholarshipsPending: [],
  user: null,
  currentScholarship: null,
  isLoading: false,
  message: '',
};

function reducer(state = initiialState, action) {
  switch (action.type) {
    case LOAD_SCHOLARSHIPS:
      return {
        ...state,
        scholarships: action.payload,
      };
    case LOAD_SCHOLARSHIPS_PENDING:
      return {
        ...state,
        scholarshipsPending: action.payload,
      };
    case SHOW_SCHOLARSHIP:
      return {
        ...state,
        currentScholarship: action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_FROM_ASYNCSTORAGE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
