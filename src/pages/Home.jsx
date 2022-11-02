import React from "react";
import { FileUploader } from "../component/FileUploader";
import { GetFileNames } from "../component/GetFileNames";

import "./home.css";

const Home = () => {
    return (
        <div className="home-container">
            <FileUploader />
            <GetFileNames />
        </div>
    )
}

export default Home;