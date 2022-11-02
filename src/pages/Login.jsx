import React, {useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
import { authenticate, isAuthenticated } from "../auth";

import "./login.css"

const Login = () => {
    const [values, setValues] = useState({
        redirectToReferrer: false
    });
    const handleCallbackResponse = (response) => {
        authenticate(response.credential, () => {
            setValues({
                ...values,
                redirectToReferrer: true
            });
        });
        console.log("Encoded JWT ID token: " + response.credential);
        document.getElementById("signin-with-google-account").hidden = true;
    };

    useEffect(() => {
        
        google.accounts.id.initialize({
            client_id: "98390779563-lppvp755g9nbjo9amni1889saq1tk32k.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signin-with-google-account"),
            {
                theme: "outline",
                size: "large"
            }
        );
    }, []);

    const redirectUser = () => {
        if (isAuthenticated()) {
            return <Navigate to="/" />;
        }
    };

    return (
        <div id="signin-with-google-account">
            {redirectUser()}
        </div>
    );
};

export default Login;