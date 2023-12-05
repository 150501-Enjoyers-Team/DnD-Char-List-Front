
import React, { useState } from 'react';

import logo from "../imgs/Goblin_by_Bernie_Kang.webp";
import pic2 from "../imgs/gobl2.png"
import { useNavigate } from 'react-router-dom';

const ColoredCircle = ({ color, onClick, filled }) => {
    const circleStyle = {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      backgroundColor: filled ? '#b3ecff' : 'transparent', // бледно-голубой цвет при заполнении
      border: '1px solid white', // белая окантовка
      display: 'inline-block',
      margin: '0 5px',
      cursor: 'pointer',
    };
  
    return <div style={circleStyle} onClick={onClick}></div>;
  };
  
  const CircleTableData = () => {
    const [filledCircles, setFilledCircles] = useState([false, false, false]);
  
    const handleCircleClick = (index) => {
      const updatedCircles = [...filledCircles];
      updatedCircles[index] = !updatedCircles[index];
      setFilledCircles(updatedCircles);
    };



    return (
      <td colSpan="2" style={{ border: 'none' }}>
        {filledCircles.map((filled, index) => (
          <React.Fragment key={index}>
            <ColoredCircle
              color="red" // Цвет можно изменить на нужный
              onClick={() => handleCircleClick(index)}
              filled={filled}
            />
            {index !== filledCircles.length - 1 && <div style={{ width: '5px', display: 'inline-block' }}></div>}
          </React.Fragment>
        ))}
      </td>
    );
};

  

function CharacterDatasPage(props) {

    const navigate = useNavigate();
        
    const goToCharactersList = (event) => {
        event.preventDefault();
        navigate('/list-of-characters');
    };

   return (

       <div className = "Character_datas_page">
            <table>
                <colgroup>
                    <col style={{ width: '100px' }}/> 
                    <col style={{ width: '200px' }}/> 
                    <col style={{ width: '100px' }}/> 
                    <col style={{ width: '50px' }}/>
                    <col style={{ width: '50px' }}/>
                    <col style={{ width: '100px' }}/>   

                    <col style={{ width: '100px' }}/>   
                    <col style={{ width: '30px' }}/>   
                    <col style={{ width: '40px' }}/>  
                    <col style={{ width: '50px' }}/>    
                    <col style={{ width: '50px' }}/>   

                    <col style={{ width: '100px' }}/>   
                    <col style={{ width: '160px' }}/>   
                </colgroup>

                <tbody>
                    <tr style={{ height: '40px' }}>
                        <td rowspan="2" colspan="7" style = {{border: 'none', backgroundColor: 'transparent'}} >
                            <div className="headerStyle" style = {{border: 'none', backgroundColor: 'transparent'}}>
                                <section className="charname">
                                    <label className="lableHeader" htmlFor="charname" style = {{color: 'rgb(204, 217, 237)'}}>Имя Персонажа</label>
                                    <input className="inputHeader" name="charname" placeholder="Thoradin Fireforge"
                                    style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }} />
                                </section>
                                <section className="misc">
                                    <ul className="inputUL">
                                    <li className="inputLI" style = {{backgroundColor: 'rgba(41, 43, 109, 0.05)'}}>
                                        <label className="lableHeader" htmlFor="classlevel"style = {{color: 'rgb(204, 217, 237)'}}>Класс &amp; Уровень</label>
                                        <input className="inputHeader" name="classlevel" placeholder="Paladin 2" 
                                        style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }}/>
                                    </li>
                                    <li className="inputLI">
                                        <label className="lableHeader" htmlFor="background" style = {{color: 'rgb(204, 217, 237)'}}>Прошлое</label>
                                        <input className="inputHeader" name="background" placeholder="Acolyte" 
                                        style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }}/>
                                    </li>
                                    <li className="inputLI">
                                        <label className="lableHeader" htmlFor="playername" style = {{color: 'rgb(204, 217, 237)'}}>Имя игрока</label>
                                        <input className="inputHeader" name="playername" placeholder="Player McPlayerface" 
                                        style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }}/>
                                    </li>
                                    <li className="inputLI">
                                        <label className="lableHeader" htmlFor="race" style = {{color: 'rgb(204, 217, 237)'}}>Раса</label>
                                        <input className="inputHeader" name="race" placeholder="Half-elf" 
                                        style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }}/>
                                    </li>
                                    <li className="inputLI">
                                        <label className="lableHeader" htmlFor="alignment" style = {{color: 'rgb(204, 217, 237)'}}>Предубеждение</label>
                                        <input className="inputHeader" name="alignment" placeholder="Lawful Good" 
                                        style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }}/>
                                    </li>
                                    <li className="inputLI">
                                        <label className="lableHeader" htmlFor="experiencepoints" style = {{color: 'rgb(204, 217, 237)'}}>Опыт</label>
                                        <input className="inputHeader" name="experiencepoints" placeholder="3240" 
                                        style = {{backgroundColor: 'rgba(2, 24, 40, 0.7)', color: 'rgb(226, 250, 254)', outline: 'none'  }}/>
                                    </li>
                                    </ul>
                                </section>
                            </div>
                        </td>
                        
                        <td colspan="2" style={{ border: 'none' }}></td>
                        <td rowspan="2" colspan="2" style={{ border: 'none' }}>
                            <div className="image-container">
                                <img src={logo} alt="логотип" style={{ marginRight: '-50px' }}/>
                            </div> 
                        </td>
                        <td style={{ border: 'none' }}></td>
                        <td style={{ border: 'none' }}></td>
                    </tr>
                    <tr style={{ height: '35px' }}>
                        
                        <td colspan="2" style={{ border: 'none' }}></td>
                        <td rowspan="5" colspan="2" style={{ border: 'none' }}>
                            <div className="image-container2">
                                <img src={pic2} alt="логотип"/>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                        <td rowspan="2" style={{margin: '-20px', border: 'none'}}>
                            <div className="score_1">
                                <div className="score">
                                <label className="StrenthcoreLable" htmlFor="Strengthscore">СИЛА</label>
                                <input className="Strenthcoreinput stat" name="Strengthscore" placeholder="10"
                                 style = {{backgroundColor: 'transparent', border: 'none', color: 'rgb(220, 247, 252)',
                                 outline: 'none'}}/>
                                </div>
                                <div className="modifier">
                                <input className="statmod" name="Strengthmod" placeholder="+0" type="number" 
                                style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)'  }} />
                                </div>
                            </div>
                        </td>
                        <td style = {{ border: 'none', padding: '-20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
                            <input type="number" style={{width: '40px', height: '40px', borderRadius: '5px', border: '2px solid white', marginLeft: '10px', fontFamily: 'sans-serif', outline: 'none', backgroundColor: 'rgba(2, 24, 40, 0.74)', color: 'rgb(220, 247, 252)', paddingLeft: '6px', fontSize: '22px'}} />
                            <label  style={{height: '30px', width: '160px', justifyContent: 'center',  alignItems: 'center', borderRadius: '0 20px 20px 0', border: '2px solid white', paddingLeft: '60px', paddingTop: '6px', fontFamily: 'sans-serif'}}>Вдохновение</label>

                        </td>
                        <td rowspan="2" style = {{margin: '-10px', border: 'none'}}>
                            <div className="specialContainer">
                                <div className="specialContainer2">
                                    <label htmlFor="ac" className="specialContainerLable"
                                    style = {{width: '80px',  height: '24px', fontSize: '12px', backgroundColor: 'rgb(10, 24, 40)'}}>КЛАСС БРОНИ</label>
                                    <input className="specialContainerInput" name="ac" placeholder="10" type="number" 
                                    style = {{width: '100px', height: '60px', fontSize: '30px', outline: 'none', backgroundColor: 'rgba(2, 24, 40, 0.74)', color: 'rgb(220, 247, 252)'}}/>
                                </div>
                            </div>
                        </td>
                        <td rowspan="2" colspan="2" style = {{margin: '-10px', border: 'none'}}>
                            <div className="specialContainer">
                                <div className="specialContainer2">
                                    <label htmlFor="ac" className="specialContainerLable"
                                    style = {{width: '96px',  height: '24px', fontSize: '12px', backgroundColor: 'rgb(10, 24, 40)'}}>ИНИЦИАТИВА</label>
                                    <input className="specialContainerInput" name="ac" placeholder="10" type="number" 
                                    style = {{width: '100px', height: '60px', fontSize: '30px', outline: 'none', backgroundColor: 'rgba(2, 24, 40, 0.74)', color: 'rgb(220, 247, 252)'}}/>
                                </div>
                            </div>
                        </td>
                        <td rowspan="2" style = {{margin: '-10px', border: 'none'}}>
                            <div className="specialContainer">
                                <div className="specialContainer2">
                                    <label htmlFor="ac" className="specialContainerLable"
                                    style = {{width: '80px',  height: '24px', fontSize: '12px', backgroundColor: 'rgb(10, 24, 40)'}}>СКОРОСТЬ</label>
                                    <input className="specialContainerInput" name="ac" placeholder="10" type="number" 
                                    style = {{width: '100px', height: '60px', fontSize: '30px', outline: 'none', backgroundColor: 'rgba(2, 24, 40, 0.74)', color: 'rgb(220, 247, 252)'}}/>
                                </div>
                            </div>
                        </td>
                        <td rowspan="6" colspan="5" style={{ position: 'relative', padding: '10px' }}>
                            <textarea
                                style={{
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    backgroundColor: 'transparent',
                                    fontSize: '16px',
                                    color: 'rgb(198, 243, 251)',
                                    width: '100%',
                                    height: '100%',
                                    resize: 'none', // Запретить изменение размера textarea
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap', // Позволяет переносить текст при заполнении ширины

                                    lineHeight: '1.5', // Высота строки
                                    border: 'none', // Убираем рамку
                                    outline: 'none', // Убираем обводку при фокусе
                                }}
                                placeholder= "Вводите здесь"
                            /> 
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>Умения и особенности</p>

                        </td>
                    </tr>
                    <tr style={{ height: '46px' }}>
                        <td style = {{ border: 'none', padding: '-20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
                            <input type="number" style={{width: '40px', height: '40px', borderRadius: '5px', border: '2px solid white', marginLeft: '10px', fontFamily: 'sans-serif', outline: 'none', backgroundColor: 'rgba(2, 24, 40, 0.74)', color: 'rgb(220, 247, 252)', paddingLeft: '6px', fontSize: '22px'}} />
                            <label  style={{height: '30px', width: '180px', justifyContent: 'center',  alignItems: 'center', borderRadius: '0 20px 20px 0', border: '2px solid white', paddingLeft: '43px', paddingTop: '6px', fontFamily: 'sans-serif'}}>Бонус мастерства</label>
                        </td>
                    </tr>
                    <tr style={{ height: '94px' }}>
                        <td style= {{margin: '-20px', border: 'none'}}>
                            <div className="score_1">
                                <div className="score">
                                <label className="StrenthcoreLable" htmlFor="Strengthscore">ЛОВКОСТЬ</label>
                                <input className="Strenthcoreinput stat" name="Strengthscore" placeholder="10"
                                 style = {{backgroundColor: 'transparent', border: 'none', color: 'rgb(220, 247, 252)',
                                 outline: 'none'}}/>
                                </div>
                                <div className="modifier">
                                <input className="statmod" name="Strengthmod" placeholder="+0" type="number" 
                                style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)'  }} />
                                </div>
                            </div>
                        </td>
                        <td rowspan="2"style={{ position: 'relative', padding: '10px' }}>
                            <textarea
                                style={{
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    backgroundColor: 'transparent',
                                    fontSize: '16px',
                                    color: 'rgb(198, 243, 251)',
                                    width: '100%',
                                    height: '100%',
                                    resize: 'none', // Запретить изменение размера textarea
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap', // Позволяет переносить текст при заполнении ширины

                                    lineHeight: '1.5', // Высота строки
                                    border: 'none', // Убираем рамку
                                    outline: 'none', // Убираем обводку при фокусе
                                }}
                                placeholder= "Вводите здесь"
                            /> 
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>Спасброски</p>
                        </td>
                        <td rowspan="3" colspan="4" style = {{margin: '-60px', border: 'none'}}>
                            <div className="regular regularContainer" >
                                <div className="max maxContainer" >
                                    <label htmlFor="maxhp" className="maxhpLabel" style = {{fontSize:'13px'}}>Макс число хитов</label>
                                    <input id="maxhp" className="maxhpInput" name="maxhp" placeholder="10" type="number"
                                    style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)', marginTop: '7px', outline: 'none' }} />
                                </div>
                                <div className="current currentContainer">
                                    <label htmlFor="currenthp" className="currenthpLabel"
                                    style = {{marginLeft: '117px', marginTop: '-2px'}}>Текущие хиты</label>
                                    <input id="currenthp" className="currenthpInput" name="currenthp" type="number" 
                                    style = {{marginLeft: '158px', outline: 'none', backgroundColor: 'rgb(2, 24, 40)', height:'25px', width:'40px',  color: 'rgb(220, 247, 252)', marginTop: '-10px', fontSize:'26px', marginBottom: '-10px' }}/>
                                </div>
                            </div>
                            <div className="temporary temporaryContainer">
                                <label htmlFor="temphp" className="temphpLabel" 
                                style = {{marginLeft: '106px', marginTop: '-2px', fontSize:'13px'}}>Временные хиты</label>
                                <input id="temphp" className="temphpInput" name="temphp" type="number" 
                                style = {{marginLeft: '138px', outline: 'none', backgroundColor: 'rgb(2, 24, 40)', height:'15px', width:'50px',  color: 'rgb(220, 247, 252)', marginTop: '2px', fontSize:'20px', marginBottom: '-10px' }}/>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                        <td rowspan="2"style= {{margin: '-20px', border: 'none'}}>
                            <div className="score_1">
                                <div className="score">
                                <label className="StrenthcoreLable" htmlFor="Strengthscore">ТЕЛОСЛОЖЕНИЕ</label>
                                <input className="Strenthcoreinput stat" name="Strengthscore" placeholder="10"
                                 style = {{backgroundColor: 'transparent', border: 'none', color: 'rgb(220, 247, 252)',
                                 outline: 'none'}}/>
                                </div>
                                <div className="modifier">
                                <input className="statmod" name="Strengthmod" placeholder="+0" type="number" 
                                style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)'  }} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ height: '46px' }}>
                        <td rowspan="4" style={{ position: 'relative', padding: '10px' }}>
                            <textarea
                                style={{
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    backgroundColor: 'transparent',
                                    fontSize: '16px',
                                    color: 'rgb(198, 243, 251)',
                                    width: '100%',
                                    height: '100%',
                                    resize: 'none', // Запретить изменение размера textarea
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap', // Позволяет переносить текст при заполнении ширины

                                    lineHeight: '1.5', // Высота строки
                                    border: 'none', // Убираем рамку
                                    outline: 'none', // Убираем обводку при фокусе
                                }}
                                placeholder= "Вводите здесь"
                            /> 
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>Навыки</p>
                        </td>
                        <td rowspan="3" colspan="2" style={{ position: 'relative', padding: '10px' }}>
                            <textarea
                                style={{
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    backgroundColor: 'transparent',
                                    fontSize: '16px',
                                    color: 'rgb(198, 243, 251)',
                                    width: '100%',
                                    height: '100%',
                                    resize: 'none', // Запретить изменение размера textarea
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap', // Позволяет переносить текст при заполнении ширины

                                    lineHeight: '1.5', // Высота строки
                                    border: 'none', // Убираем рамку
                                    outline: 'none', // Убираем обводку при фокусе
                                }}
                                placeholder= "Вводите здесь"
                            /> 
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>Снаряжение</p>

                        </td>
                    </tr>    
                    <tr style={{ height: '90px' }}>
                        <td style= {{margin: '-20px', border: 'none'}}>
                            <div className="score_1">
                                <div className="score">
                                <label className="StrenthcoreLable" htmlFor="Strengthscore">ИНТЕЛЛЕКТ</label>
                                <input className="Strenthcoreinput stat" name="Strengthscore" placeholder="10"
                                 style = {{backgroundColor: 'transparent', border: 'none', color: 'rgb(220, 247, 252)',
                                 outline: 'none'}}/>
                                </div>
                                <div className="modifier">
                                <input className="statmod" name="Strengthmod" placeholder="+0" type="number" 
                                style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)'  }} />
                                </div>
                            </div>
                        </td>
                        <td colspan="2" style = {{border:'none'}}>
                            <div className="hitdice hitdiceContainer">
                                <div className="hitdice hitdiceContainer2" style = {{marginTop: '0px'}}>
                                    <div className="total totalContainer">
                                    <label htmlFor="totalhd" className="totalhdLabel" style = {{fontSize:'13px'}}>Всего</label>
                                    <input id="temphp" className="temphpInput" name="temphp" type="number" 
                                style = {{marginLeft: '1px', outline: 'none', backgroundColor: 'rgb(2, 24, 40)', height:'15px', width:'50px',  color: 'rgb(220, 247, 252)', marginTop: '2px', fontSize:'10px', marginBottom: '-10px' }}/>
                                    </div>
                                    <div className="remaining remainingContainer">
                                    <label htmlFor="remaininghd" className="remaininghdLabel" style = {{marginLeft: '47px', fontSize:'13px', marginBottom: '4px'}}>Кость хитов</label>
                                    </div>
                                </div>
                            </div>

                        </td>
                        <td colspan="2" style={{border: 'none'}}> 
                        <div className="deathsaves deathsavesContainer">
                            <div className="deathsavesContainer2">
                                <div className="labelDSContainerContainer">
                                <label className="lableDeathSaves" style = {{fontSize:'13px', marginBottom: '15px'}}> Спасброски от смерти</label>
                                </div>
                                <div className="marks DSMarksContainer">
                                <div className="deathsuccesses DSdeathsuccessesContainer"style = {{marginRight:'16px'}}>
                                    <label className="successDSLable" style = {{fontSize:'14px'}}>Успехи</label>
                                    <div className="bubbles bublesDSContainer">
                                    <input id="deathsuccess1" className="deathsuccess1Input" name="deathsuccess1" type="checkbox" />
                                    <input id="deathsuccess2" className="deathsuccess1Input" name="deathsuccess2" type="checkbox" />
                                    <input id="deathsuccess3" className="deathsuccess1Input" name="deathsuccess3" type="checkbox" />
                                    </div>
                                </div>
                                <div className="deathfails deathfailsContainer" style = {{marginRight:'16px'}}>
                                    <label className="lableDSFails" style = {{fontSize:'14px'}}>Провалы</label>
                                    <div className="bubbles bublesDFContainer">
                                    <input id="deathfail1" className="deathfail1Input" name="deathfail1" type="checkbox" />
                                    <input id="deathfail2" className="deathfail1Input" name="deathfail2" type="checkbox" />
                                    <input id="deathfail3" className="deathfail1Input" name="deathfail3" type="checkbox" />
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </td>
                    </tr>        
                    <tr style={{ height: '90px' }}>
                        <td style= {{margin: '-20px', border: 'none'}}>
                            <div className="score_1">
                                <div className="score">
                                <label className="StrenthcoreLable" htmlFor="Strengthscore">МУДРОСТЬ</label>
                                <input className="Strenthcoreinput stat" name="Strengthscore" placeholder="10"
                                 style = {{backgroundColor: 'transparent', border: 'none', color: 'rgb(220, 247, 252)',
                                 outline: 'none'}}/>
                                </div>
                                <div className="modifier">
                                <input className="statmod" name="Strengthmod" placeholder="+0" type="number" 
                                style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)'  }} />
                                </div>
                            </div>
                        </td>
                        <td rowspan="2" colspan="4" style={{ position: 'relative', padding: '10px' }}>
                            <textarea
                                style={{
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    backgroundColor: 'transparent',
                                    fontSize: '16px',
                                    color: 'rgb(198, 243, 251)',
                                    width: '100%',
                                    height: '100%',
                                    resize: 'none', // Запретить изменение размера textarea
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap', // Позволяет переносить текст при заполнении ширины

                                    lineHeight: '1.5', // Высота строки
                                    border: 'none', // Убираем рамку
                                    outline: 'none', // Убираем обводку при фокусе
                                }}
                                placeholder= "Вводите здесь"
                            /> 
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>Прочие языки и владения</p>


                        </td>
                        <td rowspan="2" colspan="5" style={{ position: 'relative', padding: '10px' }}>
                            <textarea
                                style={{
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    backgroundColor: 'transparent',
                                    fontSize: '16px',
                                    color: 'rgb(198, 243, 251)',
                                    width: '100%',
                                    height: '100%',
                                    resize: 'none', // Запретить изменение размера textarea
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap', // Позволяет переносить текст при заполнении ширины

                                    lineHeight: '1.5', // Высота строки
                                    border: 'none', // Убираем рамку
                                    outline: 'none', // Убираем обводку при фокусе
                                }}
                                placeholder= "Вводите здесь"
                            /> 
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>Атаки и заклинания</p>

                        </td>
                    </tr>  
                    <tr style={{ height: '90px' }}>
                        <td style= {{margin: '-20px', border: 'none'}}>
                            <div className="score_1">
                                <div className="score">
                                <label className="StrenthcoreLable" htmlFor="Strengthscore">ХАРИЗМА</label>
                                <input className="Strenthcoreinput stat" name="Strengthscore" placeholder="10"
                                 style = {{backgroundColor: 'transparent', border: 'none', color: 'rgb(220, 247, 252)',
                                 outline: 'none'}}/>
                                </div>
                                <div className="modifier">
                                <input className="statmod" name="Strengthmod" placeholder="+0" type="number" 
                                style = {{backgroundColor: 'rgb(2, 24, 40)', color: 'rgb(220, 247, 252)'  }} />
                                </div>
                            </div>
                        </td>
                        <td colspan="2" style={{ position: 'relative', border: 'none' }}>
                            <button style={{ position: 'absolute', bottom: 20, right: 20, borderRadius: '10px' }} type="submit" onClick={goToCharactersList}>
                                Сохранить персонажа 
                            </button>
                        </td>
                    </tr> 
                </tbody>
            </table>
            
       </div>

   );
};


export default CharacterDatasPage;
