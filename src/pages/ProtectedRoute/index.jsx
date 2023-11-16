import React from 'react'

import { Navigate } from 'react-router-dom'
const ProtectedRoute = (props) => {
    const { component: Component } = props;
    const token = localStorage.getItem('USERS');
    return (
        token ?
            <Component /> :
            <Navigate to="/login" replace={true} />

    )
}
export default ProtectedRoute;