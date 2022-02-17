/* eslint-disable import/no-unresolved */
import {REACT_APP_API_URL_BASE} from '@env';

const URL_BASE = REACT_APP_API_URL_BASE;
const createUser = data => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${URL_BASE}/api/users/`, payload);
};

const userServices = {
  createUser,
};

export default userServices;
