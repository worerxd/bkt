/* eslint-disable import/no-unresolved */
import {REACT_APP_API_URL_BASE} from '@env';

const URL_BASE = REACT_APP_API_URL_BASE;

const getAllScholarships = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${URL_BASE}/api/scholarships/`, payload);
};

const getScholarshipById = id => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${URL_BASE}/api/scholarships/${id}`, payload);
};

const createScholarship = data => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${URL_BASE}/api/scholarships/`, payload);
};

const changeScholarshipState = id => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${URL_BASE}/api/scholarships/${id}`, payload);
};

const scholarshipServices = {
  getAllScholarships,
  getScholarshipById,
  createScholarship,
  changeScholarshipState,
};

export default scholarshipServices;
