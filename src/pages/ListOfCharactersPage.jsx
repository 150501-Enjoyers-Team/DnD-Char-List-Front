import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './styles/style.css'
import CharacterChooseBox from '../components/CharacterChooseBox';
import CharacterListApi from '../API/CharacterListAPI';

const ListOfCharactersPage = () => {

    const [listOfCharacters, setListOfCharacters] = useState([])
    const [queryParameters] = useSearchParams()

    const username = queryParameters.get("username") // придумать, откуда будем его грузить

    const handleError = (e) => {
        if (e.status) console.log("status error with status: " + e.status)
        else console.log(e)
    } 

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
};

export default ListOfCharactersPage;