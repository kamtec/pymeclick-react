import React from "react";
import Loading from "../assets/images/loading.jpg";
import "../assets/styles/components/LoaderElement.scss";


const LoaderElement = () =>(
    <div> 
        <figure>
            <img
                src={Loading}
                alt="loading"
                >
                </img>
        </figure>
    </div>
    
    );
export default LoaderElement; 