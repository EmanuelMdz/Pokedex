import React from "react";
import "./PokemonPreview.css";

export const PokemonPreview = (props) => {
  return (
    <div className={`container_preview ${props.type}`}>
      <p>#{props.number}</p>
      <div className="imageContent">
        {" "}
        <img src={props.img} alt="" />
      </div>

      <p className="name">{props.name}</p>
    </div>
  );
};
