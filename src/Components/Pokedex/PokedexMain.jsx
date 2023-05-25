import React, { useEffect, useState } from "react";
import { PokemonPreview } from "../Extras/PokemonPreview";
import "./PokedexMain.css";
export const PokedexMain = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"
      );
      const data = await response.json();
      const pokeNames = data.results.map((pokemon) => pokemon.name);

      const pokemonData = await Promise.all(
        pokeNames.map(async (pokemonName) => {
          const pokemonResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          const pokemonData = await pokemonResponse.json();

          return {
            name: pokemonData.name,
            id: pokemonData.id,
            image: pokemonData.sprites.front_default,
            backImage: pokemonData.sprites.back_default,
            weight: pokemonData.weight,
            height: pokemonData.height,
            hp: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            defence: pokemonData.stats[2].base_stat,
            specialAttack: pokemonData.stats[3].base_stat,
            specialDefence: pokemonData.stats[4].base_stat,
            speed: pokemonData.stats[5].base_stat,
            type: pokemonData.types.map((type) => type.type.name),
          };
        })
      );

      setData(pokemonData);
    };

    fetchData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className="containerPokedex">
      {data.map((pokemon) => (
        <div>
          <PokemonPreview
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.image}
            number={pokemon.id}
          />
        </div>
      ))}
    </div>
  );
};
