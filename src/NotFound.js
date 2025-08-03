import React from "react";
import { useNavigate } from "react-router-dom/dist";


const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
        <h1>Page Not Found</h1>
        <button onClick={()=> navigate(-1)}>Back</button>
        </>
    )
}

export default NotFound