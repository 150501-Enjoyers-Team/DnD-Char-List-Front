// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RegistrationForm from './pages/SignInPage'; 

import { Route, BrowserRouter, Routes} from 'react-router-dom';
import SuccessGoogleLoginPage from './pages/SuccessGoogleLoginPage';
import ListOfCharactersPage from './pages/ListOfCharactersPage';

import './components/background/starSky.css';
import StarSky from "./components/background/starSky";

import CharacterDatasPage from './pages/CharacterDataPage';


function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const [users, setUsers] = useState([
    { 
      username: "ananas", 
      password: "124",
      characters: [
        {
          firstName: "Chiiiraa Chooo",
          lastName: "llll1",
          class: "Warrior",
          race: "Human",
          experience: 100,
          strength: 10,
          agility: 8,
          intellect: 5,
          charisma: 7,
          abilities: "Some abilities description",
          equipment: [
            { id: 1, item: "Sword" },
            { id: 2, item: "Shield" }
          ]
        }, 
        {
          firstName: "Toni",
          lastName: "koki321",
          class: "Bower",
          race: "Elf",
          experience: 100,
          strength: 10,
          agility: 8,
          intellect: 5,
          charisma: 7,
          abilities: "Some abilities description",
          equipment: [
            { id: 1, item: "Sword" },
            { id: 2, item: "Shield" }
          ]
        },
        {
          firstName: "3Char",
          lastName: "BladeMaster",
          class: "Knight",
          race: "Dwarf",
          experience: 120,
          strength: 12,
          agility: 6,
          intellect: 4,
          charisma: 8,
          abilities: "Master of the blade",
          equipment: [
            { id: 1, item: "Greatsword" },
            { id: 2, item: "Plate Armor" }
          ]
        },
        {
          firstName: "Chara",
          lastName: "Swiftwind",
          class: "Rogue",
          race: "Halfling",
          experience: 90,
          strength: 7,
          agility: 12,
          intellect: 6,
          charisma: 10,
          abilities: "Stealth and agility expert",
          equipment: [
            { id: 1, item: "Dagger" },
            { id: 2, item: "Cloak of Invisibility" }
          ]
        },
      ]
    },
    { 
      username: "stepa", 
      password: "qazxsw",
      characters: [
        {
          name: "Chin",
          class: "Mage",
          race: "Elf",
          experience: 80,
          strength: 5,
          agility: 6,
          intellect: 12,
          charisma: 9,
          abilities: "Some other abilities",
          equipment: [
            { id: 1, item: "Staff" },
            { id: 2, item: "Robe" }
          ]
        },
        {
          firstName: "Chegg",
          lastName: "Thundercaster",
          class: "Sorcerer",
          race: "Human",
          experience: 110,
          strength: 6,
          agility: 7,
          intellect: 14,
          charisma: 8,
          abilities: "Master of thunder and lightning",
          equipment: [
            { id: 1, item: "Wand" },
            { id: 2, item: "Enchanted Robe" }
          ]
        },
        {
          firstName: "Seriu",
          lastName: "Stoneheart",
          class: "Paladin",
          race: "Dwarf",
          experience: 100,
          strength: 10,
          agility: 5,
          intellect: 8,
          charisma: 12,
          abilities: "Protector of the weak",
          equipment: [
            { id: 1, item: "Mace" },
            { id: 2, item: "Holy Shield" }
          ]
        },
        {
          firstName: "Kora",
          lastName: "Wanderer",
          class: "Ranger",
          race: "Half-Elf",
          experience: 85,
          strength: 8,
          agility: 10,
          intellect: 7,
          charisma: 9,
          abilities: "Expert tracker and survivalist",
          equipment: [
            { id: 1, item: "Bow" },
            { id: 2, item: "Cloak of Camouflage" }
          ]
        },
      ]
    }
  ]);

  const addUser = (newUsername, newPassword) => {
    setUsers([...users, { 
      username: newUsername, 
      password: newPassword,
      characters: []
    }]);
  };

  const handleLogin = (user) => {
    setAuthenticatedUser(user); // сохраняем информацию об аутентифицированном пользователе
  };

  const deleteChar = (characterToDelete) => {
    // Проверка на существование аутентифицированного пользователя
    if (!authenticatedUser) return;

    const updatedAuthenticatedUser = {
      ...authenticatedUser,
      characters: authenticatedUser.characters.filter(character => character !== characterToDelete),
    };

    // Обновляем состояние персонажей у аутентифицированного пользователя
    setAuthenticatedUser(updatedAuthenticatedUser);

    // Обновляем список всех пользователей, заменяя аутентифицированного пользователя в массиве
    const updatedUsers = users.map(user => {
      if (user.username === authenticatedUser.username) {
        return updatedAuthenticatedUser;
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <div>
      <StarSky/>
      <StarSky/>

      <BrowserRouter>
      <Routes>

        <Route path="/" element={<RegistrationForm users={users} addUser={addUser} onLogin={handleLogin}/>} />
        <Route path="/ouauthlogingoogle" element={<SuccessGoogleLoginPage />} />
        <Route path="/list-of-characters" element={<ListOfCharactersPage authenticatedUser={authenticatedUser} deleteChar={deleteChar}/>}/>
        <Route path="/character-datas" element={<CharacterDatasPage />}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;




  /*
  const addCharacterToUser = (username, newCharacter) => {
    setUsers(users.map(user => {
      if (user.username === username) {
        return {
          ...user,
          characters: [...user.characters, newCharacter]
        };
      }
      return user;
    }));
  };
  */









// 


/* rcc→	class component skeleton
rrc→	class component skeleton with react-redux connect
rrdc→	class component skeleton with react-redux connect and dispatch
rccp→	class component skeleton with prop types after the class
rcjc→	class component skeleton without import and default export lines
rcfc→	class component skeleton that contains all the lifecycle methods
rwwd→	class component without import statements
rpc→	class pure component skeleton with prop types after the class
rsc→	stateless component skeleton
rscp→	stateless component with prop types skeleton
rscm→	memoize stateless component skeleton
rscpm→	memoize stateless component with prop types skeleton
rsf→	stateless named function skeleton
rsfp→	stateless named function with prop types skeleton
rsi→	stateless component with prop types and implicit return
fcc→	class component with flow types skeleton
fsf→	stateless named function skeleton with flow types skeleton
fsc→	stateless component with flow types skeleton
rpt→	empty propTypes declaration
rdp→	empty defaultProps declaration
con→	class default constructor with props
conc→	class default constructor with props and context
est→	empty state object
*/