import React from "react";
import Error500 from "../assets/images/error500.jpg";
import "../assets/styles/components/ErrorHandler.scss";

const ErrorHandler = () =>(
<div> 
    <figure>
        <img
            src={Error500}
            alt="error500"
            >
            </img>
    </figure>
</div>

);
export default ErrorHandler; 