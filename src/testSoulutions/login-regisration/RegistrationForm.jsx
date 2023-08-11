import React, { useState } from 'react';
import Input from '../../components/Input';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import BasicAuthApi from '../../API/BasicAuthAPI';
import OAuthGoogleApi from "../../API/OAuthGoogleAPI"

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
    <div>
      <form action="registration">
        <Input class="login" type="text" name="login" placeholder="Логин"
        onChange={(event) => setLogin(event.target.value)}
        />
        <Input class="password" type="password" name="password"  placeholder="Пароль"
         onChange={(event) => setPassword(event.target.value)}
        />
        <div class="form-group">
          <button onClick={sendLoginData} type="submit">Подтвердить</button>
        </div>  
        <div class="form-group">
          <button onClick={sendRegisterData} type="submit">Зарегистрировать</button>
        </div>
        <div class="form-group">
          <p>{closedData}</p>
          <button onClick={getClosedData} type="submit">Получить доступ к закрытой информации</button>
        </div> 
        <div class="form-group">
          <p/>
          <button onClick={doGoogleAuth} type="submit">Войти через google</button>
        </div>         
      </form>
    </div>
  );
};

export default RegistrationForm;