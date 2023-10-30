import React, { useState } from 'react';
import "./styles//style.css"
import { useNavigate } from 'react-router-dom';
import BasicAuthApi from '../API/BasicAuthAPI';
import OAuthGoogleApi from "../API/OAuthGoogleAPI"

const RegistrationForm = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [closedData, setClosedData] = useState("");
  const navigate = useNavigate();

  if (localStorage.getItem("access_token"))
  {}

  const handleError = (e) => {
    if (e.status) console.log("status error with status: " + e.status)
    else console.log(e)
  } 

  const sendLoginData = (event) =>
  {
    event.preventDefault();
    console.log(login);
    console.log(password);

    BasicAuthApi.postAuthData(login, password)
    .then(data => {
      localStorage.setItem("access_token", "Bearer " + data.token)
    })
    .then(() => {
      navigate("/list-of-characters?username=" + login + "&")
    })
    .catch(handleError)
  }

  const sendRegisterData = (event) =>
  {
    event.preventDefault()
    BasicAuthApi.postRegistrationData(login, password)
    .catch(handleError)
  }

  const getClosedData = (event) =>
  {
    event.preventDefault()
    fetch("http://localhost:8080/secured", {
      method: 'GET',
      headers: {
          "Authorization":  localStorage.getItem("access_token")
      },
    })
    .then(response =>{
      if (!response.ok) {
          let error = new Error()
          error.status = response.status
          throw error
      }
      return response;
    })
    .catch(handleError)
  }


  const doGoogleAuth = (event) =>
  {
    event.preventDefault();
    window.location.href = OAuthGoogleApi.getLoginURL(); 
  }

  return (
    <div class="login-background">
      <form action="registration">
        <input class="login-form" type="text" name="login" placeholder="Login" onChange={(event) => setLogin(event.target.value)}/>
        <input class="login-form" type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        <input class="login-form" type="submit" value="Submit"/>
      </form>
      
      <div className="button-container">
        <button onClick={sendRegisterData} type="submit">Зарегистрировать</button>
        <button onClick={getClosedData} type="submit">Получить доступ к закрытой информации</button>
        <button onClick={doGoogleAuth} type="submit">Войти через google</button>
      </div>
      
    </div>
  );
};

export default RegistrationForm;