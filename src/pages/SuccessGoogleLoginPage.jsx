import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import OAuthGoogleApi from '../API/OAuthGoogleAPI';

const SuccessGoogleLoginPage = () => {
    const [queryParameters] = useSearchParams();
    const navigate = useNavigate();
   
    const handleError = (e) => {
        if (e.status) console.log("status error with status: " + e.status)
        else console.log(e)
    }
     
    useEffect(() => {
        const code = queryParameters.get("code")
        OAuthGoogleApi.getAuthTokens(code)
        .then(tokenObj => {
            const jwtBody = JSON.parse(atob(tokenObj.accessToken.split(".")[1]))
            localStorage.setItem("access_token", "Bearer " + tokenObj.accessToken)
            localStorage.setItem("refresh_token", tokenObj.refreshToken)
            console.log("Acces token is " + tokenObj.refreshToken)
            console.log("Getting new acces token")
           // navigate("/list-of-characters?username=" + jwtBody.email + "&")
        })
        .catch(handleError)
    }, [])
   
    return (
        <div>
            Sucsess login using google!
        </div>
    );
};

export default SuccessGoogleLoginPage;