import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export const BaseStats = (props) =>{
let prueba= "";
  switch (props.typecolor) {
  case "fair":
    prueba="#f57d31";    
    break;
  case "rock":
    prueba="#f57d31";    
    break;
  case "ghost":
    prueba="#70559b";
    break;
  case "steel":
    prueba="#b7b9d0";
    break;
  case "water":
    prueba="#6493eb";
    break;
  case "grass":
    prueba="#74cb48";
    break;
  case "phychic":
    prueba="#fb5584";
    break; 
  case "ice":
    prueba="#9ad6df";
    break;
  case "dark":
    prueba="#75574c";
    break;
  case "fairy":
    prueba="#e69eac";
    break;
  case "normal":
    prueba="#aaa67f";
    break;
  case "fighting":
    prueba="#c12239";
    break;
  case "flying":
    prueba="#a891ec";
    break;
  case "poison":
    prueba="#a43e9e";
    break;
  case "ground":
    prueba="#dec16b";
    break;
  case "bug":
    prueba="#a78723";
    break;
  case "electric":
    prueba="#f9cf30";
    break;
  case "dragon":
    prueba="#7037ff";
    break;
  default:
    break;
  }

  return <div className='baseStats'>
    <div className='titleBase'>
      <p className={`pBaseSt ${props.typestyle}Color`}>Base Stats</p>
    </div>
    <div className='contStats'>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>HP</p>
        <p className='valueSt'>0{props.hp}</p>
        <ProgressBar className='progressBar' maxCompleted={250} isLabelVisible={false} bgColor={prueba} completed={props.hp}/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>ATK</p>
        <p className='valueSt'>0{props.atk}</p>
        <ProgressBar className='progressBar' maxCompleted={250} isLabelVisible={false} bgColor={prueba} completed={props.atk}/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>DEF</p>
        <p className='valueSt'>0{props.def}</p>
        <ProgressBar className='progressBar' maxCompleted={250} isLabelVisible={false} bgColor={prueba} completed={props.def}/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>SATK</p>
        <p className='valueSt'>0{props.satk}</p>
        <ProgressBar className='progressBar' maxCompleted={250} isLabelVisible={false} bgColor={prueba} completed={props.satk}/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>SDEF</p>
        <p className='valueSt'>0{props.sdef}</p>
        <ProgressBar className='progressBar' maxCompleted={250} isLabelVisible={false} bgColor={prueba} completed={props.sdef}/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>SPD</p>
        <p className='valueSt'>0{props.spd}</p>
        <ProgressBar className='progressBar' maxCompleted={250} isLabelVisible={false} bgColor={prueba} completed={props.spd}/>
       </div>
    </div>
  </div>
}
