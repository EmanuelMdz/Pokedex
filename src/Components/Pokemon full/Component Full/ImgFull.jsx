import React from "react";

export const ImgFull = (props) => {
  return (
    <div className="imgCont">
      <a href="">
        <img
          className="nav__flecha__izq"
          src="../public/flecha__izq.png"
          alt=""
        />
      </a>
      <img className="imgFull" src={props.image} alt="" />
      <a href="">
        <img
          className="nav__flecha__der"
          src="../public/flecha__der.png"
          alt=""
        />
      </a>
    </div>
  );
};
