import React from 'react'

import ProgressBar from "@ramonak/react-progress-bar";

export const BaseStats = (props) => {
  return <div className='baseStats'>
    <div className='titleBase'>
      <p className={`${props.typestyle}Color`}>Base Stats</p>
    </div>
    <div className='contStats'>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>HP</p>
        <p className='valueSt'>0{props.hp}</p>
        <ProgressBar className='progressBar' completed="60"/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>ATK</p>
        <p className='valueSt'>0{props.atk}</p>
        <ProgressBar className='progressBar' completed="60"/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>DEF</p>
        <p className='valueSt'>0{props.def}</p>
        <ProgressBar className='progressBar' completed="60"/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>SATK</p>
        <p className='valueSt'>0{props.satk}</p>
        <ProgressBar className='progressBar' completed="60"/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>SDEF</p>
        <p className='valueSt'>0{props.sdef}</p>
        <ProgressBar className='progressBar' completed="60"/>
      </div>
      <div className='divStat'>
        <p className={`siglaSt ${props.typestyle}Color`}>SPD</p>
        <p className='valueSt'>0{props.spd}</p>
        <ProgressBar className='progressBar' completed="60"/>
       </div>
    </div>
  </div>
}
