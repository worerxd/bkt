// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authServices from '../services/auth';
import userServices from '../services/users';
import scholarshipServices from '../services/scholarships';
import {
  LOAD_SCHOLARSHIPS,
  LOAD_SCHOLARSHIPS_PENDING,
  SHOW_SCHOLARSHIP,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
  LOGIN_USER,
  GET_USER_FROM_ASYNCSTORAGE,
  LOGOUT_USER,
  REGISTER_USER,
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

export const registerUser = user => ({
  type: REGISTER_USER,
  payload: user,
});

export const loginUser = user => ({
  type: LOGIN_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT_USER,
  payload: null,
});

export const userFromAsyncStorage = user => ({
  type: GET_USER_FROM_ASYNCSTORAGE,
  payload: user,
});

export const createUser = user => async dispatch => {
  dispatch(showLoader());
  try {
    const registerResponse = await userServices.createUser(user);
    if (registerResponse.ok) {
      const response = await authServices.loginAccount(user);
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('@storage_Key', data.token);
        const decoded = jwt_decode(data.token);
        dispatch(registerUser(decoded));
      }
    }
  } catch (error) {
    dispatch(errorMessage(error.errorMessage));
  } finally {
    dispatch(hideLoader());
  }
};

export const getUserFromLogin = user => async dispatch => {
  dispatch(showLoader());

  try {
    const response = await authServices.loginAccount(user);

    const data = await response.json();
    if (response.ok) {
      await AsyncStorage.setItem('@storage_Key', data.token);
      const decoded = jwt_decode(data.token);
      dispatch(loginUser(decoded));
    }
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(hideLoader());
  }
};

export const removeUserFromLogout = () => async dispatch => {
  await AsyncStorage.removeItem('@storage_Key');
  dispatch(logout());
};

export const getUserFromAsyncStorage = () => async dispatch => {
  const token = await AsyncStorage.getItem('@storage_Key');
  if (token) {
    const decoded = jwt_decode(token);
    dispatch(userFromAsyncStorage(decoded));
  }
};

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
