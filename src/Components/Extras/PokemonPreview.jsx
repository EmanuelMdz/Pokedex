import React from 'react'

export const PokemonPreview = (props) => {
  return <div>
    <p>{props.number}</p>
    <img src={props.img} alt="" />
    <p>{props.name}</p>
  </div>
  
}
