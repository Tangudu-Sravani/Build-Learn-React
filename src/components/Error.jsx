import React from "react";
import ReactDOM from "react-dom/client";
import {useRouteError} from "react-router-dom";
const Error = () => {
    const err=useRouteError();
    console.log("err......",err);
    return (
        <div>
            <h1>Oops! something went Wrong 
            Error 🐱</h1> 
        </div>
    )
}
export default Error