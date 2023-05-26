import React from 'react'

export const BaseStats = (props) => {
  return <div className='baseStats'>
    <div className='titleBase'>
      <p>Base Stats</p>
    </div>
    <div className='contStats'>
      <div className='divStat'>
        <p>HP</p>
        <p>0{props.hp}</p>
      </div>
      <div className='divStat'>
        <p>ATK</p>
        <p>0{props.atk}</p>
      </div>
      <div className='divStat'>
        <p>DEF</p>
        <p>0{props.def}</p>
      </div>
      <div className='divStat'>
        <p>SATK</p>
        <p>0{props.satk}</p>
      </div>
      <div className='divStat'>
        <p>SDEF</p>
        <p>0{props.sdef}</p>
      </div>
      <div className='divStat'>
        <p>SPD</p>
        <p>0{props.spd}</p>
       </div>
    </div>
  </div>
}
