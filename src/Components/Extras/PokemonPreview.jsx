import React from "react";
import "./PokemonPreview.css";

export const PokemonPreview = (props) => {
  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <div className={`container_preview ${props.type}`}>
      <p className={`container_p ${props.type}`}>#{props.number}</p>
      <div className="imageContent">
        {" "}
        <img src={props.img} alt="" />
      </div>

      <p className="name">{capitalizeName(props.name)}</p>
    </div>
  );
};
