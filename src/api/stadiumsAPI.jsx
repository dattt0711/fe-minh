import { axiosBodyToAPI, sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_CREATE_STADIUMS = "http://localhost:5000/stadiums/create";
const API_INFO_STADIUMS = "http://localhost:5000/stadiums/info";
const API_LIST_STADIUMS = "http://localhost:5000/stadiums/list";
const API_DELETE_STADIUMS = "http://localhost:5000/stadiums/delete";
const API_UPDATE_STADIUMS = "http://localhost:5000/stadiums/update";
export const fetchCreateStadium = (params) => {
    const body = params;
    return axiosBodyToAPI('POST', API_CREATE_STADIUMS, body);
};
export const fetchDeleteStadiumApi = (params) => {
    const body = params;
    return axiosBodyToAPI('DELETE', API_DELETE_STADIUMS, body);
};
export const fetchListStadiumsApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_STADIUMS}${queryParams}`);
};
export const fetchInfoStadiumApi = (params = {}) => {
    return sendQueryToAPI(`${API_INFO_STADIUMS}/${params}`);
};
export const fetchEditStadium = (params) => {
    const body = params;
    return axiosBodyToAPI('PUT', API_UPDATE_STADIUMS, body);
};