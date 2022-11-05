import React, { useState, useEffect } from "react";
import "./getFileNames.css";

export const GetFileNames = () => {
    const [fileName, setFileName] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch('http://localhost:8000/getFileNames/');
    //             const data = await res.json();
    //             setFileName(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchData();
    // }, [fileName]);

    const handleOnClick = async () => {
        try {
            const res = await fetch('http://localhost:8000/getFileNames/');
            const data = await res.json();
            setFileName(data);
        } catch (err) {
            console.log(err);
        }
    };

    
    
    const [downloadFile, setDownloadFile] = useState("");
    
    // const onButtonClick = names => async (e) => {
    //     e.preventDefault();
    //     // console.log(downloadFile);
    //     setDownloadFile(names);
    //     const res = await fetch(`http://localhost:8000/download?filename=${downloadFile}`, {
    //         method: "GET"
    //     })
    //         .then(res => {
    //             res.blob().then(blob => {
    //                 let url = window.URL.createObjectURL(blob);
    //                 let a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = downloadFile;
    //                 a.click();
    //             });
    //         });
    // };

    useEffect(() => {
        if (downloadFile) {
            fetch(`http://localhost:8000/download?filename=${downloadFile}`, {
                method: "GET"
            })
                .then(res => {
                    res.blob().then(blob => {
                        let url = window.URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = url;
                        a.download = downloadFile;
                        a.click();
                    });
                });
        }
    }, [downloadFile]);

    const onButtonClick = names => (e) => {
        e.preventDefault();
        // console.log(downloadFile);
        setDownloadFile(names);
        
    };

    return (
        <div className="filename-list-container">
            <button onClick={handleOnClick}>Refresh</button>
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