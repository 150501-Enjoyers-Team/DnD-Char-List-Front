import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import OAuthGoogleApi from "../API/OAuthGoogleAPI"



const RegistrationForm = props => {

  const { users, addUser, onLogin } = props;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const sendLoginData = (event) => {
    event.preventDefault();
    console.log(login);
    console.log(password);
  
    // Проверяем, есть ли пользователь с введенным логином и паролем
    const userFound = users.find(user => user.username === login && user.password === password);
  
    if (userFound) {
      console.log("Да"); // Если найден пользователь с таким логином и паролем
      onLogin(userFound);
      //localStorage.setItem("access_token", "Bearer " + userFound.token);
      //navigate("/list-of-characters?username=" + login + "&");
      navigate('/list-of-characters');
    } else {
      console.log("Нет"); // Если пользователь не найден
      // Можно добавить какое-то сообщение об ошибке или обработку других действий
    }
  };

  const sendRegisterData = (event) => {
    event.preventDefault();
    addUser(login, password);
    console.log("Пользователь добавлен:", login);
    console.log("Массив пользователей:", users);
  };


  const doGoogleAuth = (event) =>
  {
    event.preventDefault();
    window.location.href = OAuthGoogleApi.getLoginURL(); 
  }

  return (
    <div className="login-background">

      <div className="button-container">
        <form action="registration" onSubmit={sendLoginData}>
          <input className="login-form" type="text" name="login" placeholder="Login" onChange={(event) => setLogin(event.target.value)}/>
          <input className="login-form" type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
          <input className="login-form" type="submit" value="Submit"/>
        </form>
        
        <button onClick={sendRegisterData} type="submit">Зарегистрировать</button>
        
        <button onClick={doGoogleAuth} type="submit">Войти через google</button>
      </div>
      
    </div>
  );
};

export default RegistrationForm;







// <button onClick={getClosedData} type="submit">Получить доступ к закрытой информации</button>