
import React, { useState } from 'react';
import CharacterInList from '../components/character_in_list';

import { useNavigate } from 'react-router-dom';

function ListOfCharactersPage(props) {

    const { authenticatedUser, deleteChar } = props;
    
    //const { authenticatedUser } = props;

    console.log("Информация об аутентифицированном пользователе:", authenticatedUser);

    const navigate = useNavigate();

    const goToRedactCharacter = (event) => {
        event.preventDefault();
        navigate('/character-datas');
    };
    

   return (
        
        <div className="CharactersList_on_page">
            <h2 className="HHH2" style={{ marginLeft: '30px'}}>
            Персонажи {authenticatedUser.username}
            </h2>

        <div className="character-list">
            {authenticatedUser.characters.map((el, index) => (
            <CharacterInList key={index} user={el} deleteChar={deleteChar}/>
            ))}
        </div>
        <button onClick={goToRedactCharacter} style={{ float: 'right', margin: '20px', position: 'relative', zIndex: '5000' }}>Добавить персонажа</button>
  
        </div>
        
   );


};

export default ListOfCharactersPage;

// , deleteChar


//<h2 className="HHH2"> {authenticatedUser.username} </h2>

/*
//import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
//import { useSearchParams } from 'react-router-dom';
//import './styles/style.css'
//import CharacterChooseBox from '../components/CharacterChooseBox';
//import CharacterListApi from '../API/CharacterListAPI';

import Character_in_list from '../components/character_in_list';

const ListOfCharactersPage = () => {

    //const [listOfCharacters, setListOfCharacters] = useState([])
    //const [queryParameters] = useSearchParams()

    //const username = queryParameters.get("username") // придумать, откуда будем его грузить

    /*
    const handleError = (e) => {
        if (e.status) console.log("status error with status: " + e.status)
        else console.log(e)
    } 
    */

    /*
    const removeCharacter = (id) => {
        CharacterListApi.deleteCharacter(username, id)
        .then(() => CharacterListApi.getListOfCharacters(username)
        .then(data => setListOfCharacters(data))
        .catch(handleError)
        )
    }

    useEffect(() =>{
        CharacterListApi.getListOfCharacters(username)
        .then(data => setListOfCharacters(data))
        .catch(handleError)
    }, [])
    
    return (
        <div class="characterListBackground">
            <p>Username</p>
            {listOfCharacters.map(characterBox => <CharacterChooseBox removeHandler={removeCharacter} id={characterBox.id} key={characterBox.id} name={characterBox.name} level={characterBox.level}/>)}

        </div>
    );
    
    return (
        <div className = "CharactersList_on_page">
            <Character_in_list/>
        </div>
   );


};

export default ListOfCharactersPage;

*/