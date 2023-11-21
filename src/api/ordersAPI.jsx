import { sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_LIST_ORDERS = "http://localhost:5000/bookings/list";
export const fetchListOrderApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_ORDERS}${queryParams}`);
};
