import { axiosBodyToAPI, sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_REGISTER = "http://localhost:5000/users/register";
const API_LOGIN = "http://localhost:5000/users/login";
export const fetchRegister = (params) => {
    const body = params;
    return axiosBodyToAPI('POST', API_REGISTER, body);
};
export const fetchLogin = (params = {}) => {
    const body = params;
    return axiosBodyToAPI('POST', API_LOGIN, body);
};
