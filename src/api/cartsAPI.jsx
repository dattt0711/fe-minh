import { axiosBodyToAPI, sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_ADD_TO_CARTS = "http://localhost:5000/carts/addToCart";
const API_LIST_CARTS = "http://localhost:5000/carts/list";
export const fetchAddToCart = (params) => {
    const body = params;
    return axiosBodyToAPI('POST', API_ADD_TO_CARTS, body);
};
export const fetchListCartsApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_CARTS}${queryParams}`);
};
