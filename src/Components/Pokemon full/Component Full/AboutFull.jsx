import React, { useEffect } from "react";

export const AboutFull = (props) => {
  useEffect(() => {
    const fetchPokeFull = async () => {
      const pokemon = await Promise.all(
        pokeNames.map(async (pokemon) => {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

          const response = await fetch(url);
          const dataPokemon = await response.json();

          return (
            <div>
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
          );
        })
      );
    };
  });
};
