import React, { useState, useEffect } from "react";
import download from "downloadjs";
import "./getFileNames.css";

export const GetFileNames = () => {
    const [fileName, setFileName] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:8000/getFileNames/');
                const data = await res.json();
                setFileName(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [fileName]);
    
    const [downloadFile, setDownloadFile] = useState("");
    const onButtonClick = names => async (e) => {
        e.preventDefault();
        setDownloadFile(names);
        console.log(downloadFile);
        const res = await fetch(`http://localhost:8000/download?filename=${downloadFile}`, {
            method: "GET"
        });
        const blob = await res.blob;
        download(blob, downloadFile);
    };
    // console.log(fileName);
    return (
        <div className="filename-list-container">
            <ul>
                {fileName.map((names, i) =>
                    <li
                        key={i}
                        onClick={onButtonClick(names)}                        
                        value={names}
                    >{names}</li>
                )}
            </ul>
        </div>
    );
};