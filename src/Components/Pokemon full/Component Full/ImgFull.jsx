import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ImgFull = (props) => {
const [prev, setPrev] = useState(0);
const [next, setNext] = useState(1);

if (props.id>1 && props.id<props.count) {
  setPrev(props.id-1);
  setNext(props.id+1);   
}


  return (
    <div className="imgCont">
      <Link to={`/pokemon/${props.nameprev}`} >
        <img
          className="nav__flecha__izq"
          src="/flecha__izq.png"
          alt=""
        />
      </Link>
      <img className="imgFull" src={props.image} alt="" />
      <Link to={`/pokemon/${props.namenext}`}>
        <img
          className="nav__flecha__der"
          src="/flecha__der.png"
          alt=""
        />
      </Link>
    </div>
  );
};
