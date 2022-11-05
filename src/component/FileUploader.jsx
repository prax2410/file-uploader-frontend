import React, { useState } from "react";
import axios from "axios";
import "./fileUploader.css";

export const FileUploader = () => {
    const [file, setFile] = useState(null);

    const onInputChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file);

        axios.post('http://localhost:8000/upload', data)
            .then((e) => {
                console.log('Success');
            });
    }

    return (
        <div className="file-uploader-form">
            <form method="post" action="#" onSubmit={onSubmit}>
                <div>
                    <label><h2>Upload Your File Here</h2></label>
                    <input
                        type="file"
                        onChange={onInputChange}
                    />
                </div>
                <button>Upload</button>
            </form>
        </div>
    );
};