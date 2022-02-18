import scholarshipServices from '../services/scholarships';
import {
  LOAD_SCHOLARSHIPS,
  LOAD_SCHOLARSHIPS_PENDING,
  SHOW_SCHOLARSHIP,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
} from './types';

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: true,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
  payload: false,
});

export const errorMessage = message => ({
  type: ERROR_MESSAGE,
  payload: message,
});

export const loadScholarships = scholarships => ({
  type: LOAD_SCHOLARSHIPS,
  payload: scholarships,
});

export const loadScholarshipsPending = scholarships => ({
  type: LOAD_SCHOLARSHIPS_PENDING,
  payload: scholarships,
});

export const showScholarship = scholarship => ({
  type: SHOW_SCHOLARSHIP,
  payload: scholarship,
});

export const fetchScholarships = () => async dispatch => {
  dispatch(showLoader());

  try {
    const scholarships = await scholarshipServices.getAllScholarships();
    const data = await scholarships.json();
    dispatch(loadScholarships(data));
  } catch (error) {
    dispatch(errorMessage(error.message));
  } finally {
    dispatch(hideLoader());
  }
};
export const fetchScholarshipsPending = () => async dispatch => {
  dispatch(showLoader());

  try {
    const scholarships = await scholarshipServices.getAllScholarships();
    const data = await scholarships.json();
    const filteredData = data.filter(item => item.state === 'pending');
    dispatch(loadScholarshipsPending(filteredData));
  } catch (error) {
    dispatch(errorMessage(error.message));
  } finally {
    dispatch(hideLoader());
  }
};

export const fetchSingleScholarship = id => async dispatch => {
  dispatch(showLoader());

  try {
    const scholarship = await scholarshipServices.getScholarshipById(id);
    const data = await scholarship.json();
    dispatch(showScholarship(data));
  } catch (error) {
    dispatch(errorMessage(error.message));
  } finally {
    dispatch(hideLoader());
  }
};
