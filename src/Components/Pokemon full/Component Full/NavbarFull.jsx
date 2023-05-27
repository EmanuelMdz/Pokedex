import React from 'react'
import "./FullCss.css";
import { Link } from 'react-router-dom';

export const NavbarFull = (props) => {
  return<div className='navFull'>
    <div className='navFullLeft'>
      <Link className='linkFull' to={`/`}> <img className='imgNavFull' src="/arrow-left.svg" alt=""/> </Link>
      <p>{props.name}</p>
    </div>
    <p>#00{props.number}</p>
  </div>
}
