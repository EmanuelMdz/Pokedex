import React from 'react'

export const AboutFull = () => {
  return <div>
    <div>
        <p>{props.style1}</p>
        <p>{props.style2}</p>
    </div>
    <p>About</p>
    <div>
        <div>{props.weight}</div>
        <div>{props.height}</div>
        <div>{props.moves}</div>
    </div>
    <p>{props.description}</p>
    </div>
}
