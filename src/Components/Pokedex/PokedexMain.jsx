import React, { useEffect, useState } from "react";
import { PokemonPreview } from "../Extras/PokemonPreview";
import { Link } from "react-router-dom";
import "./PokedexMain.css";
import Navbar from "../Navbar/Navbar";

export const PokedexMain = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
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
        setFilteredData(pokemonData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerPokedex">
      <Navbar
        data={data}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <div className="pokemones_vistos">
        {error && (
          <div className="error">No se lograron cargar los pokemones</div>
        )}
        {isLoading && <div class="pokemon"></div>}
        {filteredData.map((pokemon) => (
          <div key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <PokemonPreview
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.image}
                number={pokemon.id}
                type={pokemon.type[0]}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
