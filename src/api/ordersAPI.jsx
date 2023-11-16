import { axiosBodyToAPI, sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_PAYMENT = "http://localhost:5000/orders/payment";
const API_LIST_ORDERS = "http://localhost:5000/orders/list";
export const fetchPaymentApi = (params) => {
    const body = params;
    return axiosBodyToAPI('POST', API_PAYMENT, body);
};
export const fetchListOrderApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_ORDERS}${queryParams}`);
};
