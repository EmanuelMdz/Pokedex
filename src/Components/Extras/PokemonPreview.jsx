import React from "react";
import "./PokemonPreview.css";

export const PokemonPreview = (props) => {
  return (
    <div className="container_preview">
      <p>#{props.number}</p>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  );
};
