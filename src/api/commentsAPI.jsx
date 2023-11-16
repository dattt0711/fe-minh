import { axiosBodyToAPI, sendQueryToAPI } from './common';
import queryString from 'query-string';

const API_CREATE_COMMENTS = "http://localhost:5000/comments/create";
const API_LIST_COMMENTS = "http://localhost:5000/comments/list";
export const fetchCreateComment = (params) => {
    const body = params;
    return axiosBodyToAPI('POST', API_CREATE_COMMENTS, body);
};
export const fetchListCommentsApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_COMMENTS}${queryParams}`);
};
