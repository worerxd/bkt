/* eslint-disable import/no-unresolved */

const URL_BASE = 'https://bkt-peru.herokuapp.com';

// const URL_BASE = REACT_APP_API_URL_BASE;
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
