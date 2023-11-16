import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    refererList: ''
}

const HomeRedux = createSlice({
    name: 'HomeRedux',
    initialState,
    reducers: {
        getProvinceRequest: () => { },
        getProvinceSuccess: (state, action) => {},
        getProvinceFailed: () => { },
        getRefererRequest: (state) => { },
        getRefererSuccess: (state, action) => {
            state.refererList = action.payload
        },
        getRefererFailed: (state, action) => {
            state.refererList = initialState.refererList
        },
    }
})

export const HomeReduxActions = HomeRedux.actions

export default HomeRedux.reducer