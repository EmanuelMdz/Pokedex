import React from "react";

export const ImgFull = (props) => {
  return (
    <div className="imgCont">
      <img className="imgFull" src={props.image} alt="" />
    </div>
  );
};
