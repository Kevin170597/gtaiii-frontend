import React from 'react';
import "./Loading.css"

import loading from "../../assets/loading.gif";

function Loading() {
    return (
        <div className="loadingContainer">
            <img src={loading} alt="loading"></img>
        </div>
    )
}

export default Loading;
