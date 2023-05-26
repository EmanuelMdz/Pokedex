import React from 'react'

export const BaseStats = (props) => {
  return <div>
    <div className='divStat'>
      <p>HP</p>
      <p>{props.hp}</p>
    </div>
    <div className='divStat'>
      <p>ATK</p>
      <p>{props.atk}</p>
    </div>
    <div className='divStat'>
      <p>DEF</p>
      <p>{props.def}</p>
    </div>
    <div className='divStat'>
      <p>SATK</p>
      <p>{props.satk}</p>
    </div>
    <div className='divStat'>
      <p>SDEF</p>
      <p>{props.sdef}</p>
    </div>
    <div className='divStat'>
      <p>SPD</p>
      <p>{props.spd}</p>
    </div>
  </div>
}
