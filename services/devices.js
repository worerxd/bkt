/* eslint-disable import/no-unresolved */
// import {REACT_APP_API_URL_BASE} from '@env';

const URL_BASE = 'https://bkt-peru.herokuapp.com';

const createDeviceToken = data => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${URL_BASE}/api/devices/`, payload);
};

const getAllDevicesTokens = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${URL_BASE}/api/devices/`, payload);
};

const deviceServices = {
  createDeviceToken,
  getAllDevicesTokens,
};

export default deviceServices;
