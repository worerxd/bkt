/* eslint-disable default-param-last */
import {
  LOAD_SCHOLARSHIPS,
  LOAD_SCHOLARSHIPS_PENDING,
  SHOW_SCHOLARSHIP,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
} from './types';

const initiialState = {
  scholarships: [],
  scholarshipsPending: [],
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
    default:
      return state;
  }
}

export default reducer;
