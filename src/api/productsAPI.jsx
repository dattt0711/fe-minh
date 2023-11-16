import { axiosBodyToAPI, sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_CREATE_PRODUCTS = "http://localhost:5000/products/create";
const API_INFO_PRODUCTS = "http://localhost:5000/products/info";
const API_LIST_PRODUCTS = "http://localhost:5000/products/list";
const API_DELETE_PRODUCTS = "http://localhost:5000/products/delete";
const API_EDIT_PRODUCTS = "http://localhost:5000/products/edit";
const API_LIST_RELATED_PRODUCTS = "http://localhost:5000/products/relatedList";
export const fetchCreateProduct = (params) => {
    const body = params;
    return axiosBodyToAPI('POST', API_CREATE_PRODUCTS, body);
};
export const fetchDeleteProductApi = (params) => {
    const body = params;
    return axiosBodyToAPI('DELETE', API_DELETE_PRODUCTS, body);
};
export const fetchListProductsApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_PRODUCTS}${queryParams}`);
};
export const fetchRelatedListProductsApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_RELATED_PRODUCTS}${queryParams}`);
};
export const fetchInfoProductApi = (params = {}) => {
    return sendQueryToAPI(`${API_INFO_PRODUCTS}/${params}`);
};
export const fetchEditProduct = (params) => {
    const body = params;
    return axiosBodyToAPI('PUT', API_EDIT_PRODUCTS, body);
};