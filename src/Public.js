import React from "react";
import { Navigate } from 'react-router-dom'

const Public = ({children}) =>{
    const token = sessionStorage.getItem("name");

    if (token){
        return <Navigate to="/dashboard"  replace/>;
    }
    return children;
}

export default Public;