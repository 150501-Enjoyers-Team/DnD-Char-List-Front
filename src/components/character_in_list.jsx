import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

//import "../App.css"
import logo from "../imgs/Goblin_by_Bernie_Kang.webp";

import { useNavigate } from 'react-router-dom';


const CharacterInList = (props) => {
  const { user, deleteChar } = props;

  const handleDeleteCharacter = () => {
    // Вызов функции deleteChar для удаления персонажа
    console.log(user);
    deleteChar(user);
};

    const navigate = useNavigate();
    
    const goToRedactCharacter = (event) => {
        event.preventDefault();
        navigate('/character-datas');
    };

    return (
      <div className="Char_in_l">

        <div className="image-container">
            <img src={logo} alt="логотип" />
        </div>

        <div className="text-container">
            <h3 className="char_h3">{user.firstName} {user.lastName}</h3>
            <div className="bio_n_status">
                <p className="bio">{user.race}</p>
                <p className="status">{user.class}</p>
            </div>

        </div>

        <div className="icons-container">
            <IoHammerSharp className="edit-icon" onClick={goToRedactCharacter}/>
            <IoCloseCircleSharp className="delete-icon" onClick={handleDeleteCharacter}/>
        </div>
        
      </div>
    );
};
  
  export default CharacterInList;
  

  //  onClick={deleteChar(user)}
  // deleteChar