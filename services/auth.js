/* eslint-disable import/no-unresolved */
// import {REACT_APP_API_URL_BASE} from '@env';

const URL_BASE = 'https://bkt-peru.herokuapp.com';

const loginAccount = ({email, password}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  };

  return fetch(`${URL_BASE}/auth/local/login`, payload);
};

const confirmAccount = ({hash}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({hash}),
  };
  return fetch(`${URL_BASE}/auth/local/confirm-account`, payload);
};

const authServices = {
  loginAccount,
  confirmAccount,
  // forgotPassword,
};

export default authServices;
