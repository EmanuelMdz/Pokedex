import React, { useEffect, useState } from "react";
import { NavbarFull } from "./Component Full/NavbarFull";
import { ImgFull } from "./Component Full/ImgFull";
import { AboutFull } from "./Component Full/AboutFull";
import { BaseStats } from "./Component Full/BaseStats";
import { useParams } from "react-router-dom";
import "./Component Full/FullCss.css";

export const PokemonFullScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nameprev, setNameprev] = useState("");
  const [namenext, setNamenext] = useState("");

  let { pokemonName } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
    setIsLoading(true);
  }, [pokemonName]);

  const fetchData = async () => {
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const pokemonData = await pokemonResponse.json();

      setData({
        name: pokemonData.name,
        id: pokemonData.id,
        image: pokemonData.sprites.front_default,
        imageFull: pokemonData.sprites.other.dream_world.front_default,
        backImage: pokemonData.sprites.back_default,
        weight: pokemonData.weight,
        height: pokemonData.height,
        hp: pokemonData.stats[0].base_stat,
        attack: pokemonData.stats[1].base_stat,
        defence: pokemonData.stats[2].base_stat,
        specialAttack: pokemonData.stats[3].base_stat,
        specialDefence: pokemonData.stats[4].base_stat,
        speed: pokemonData.stats[5].base_stat,
        type: pokemonData.types,
        typecont: pokemonData.types[0].type.name,
        typestyle: pokemonData.types[0].type.name,
        typecolor: pokemonData.types[0].type.name,
        ability: pokemonData.abilities,
      });
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataNext();
    fetchDataPrev();
  }, [data]);

  const fetchDataPrev = async () => {
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${data.id - 1}`
      );
      const pokemonData = await pokemonResponse.json();
      setNameprev(pokemonData.name);
    } catch (error) {
      setNameprev("");
    }
  };

  const fetchDataNext = async () => {
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${data.id + 1}`
      );
      const pokemonData = await pokemonResponse.json();
      setNamenext(pokemonData.name);
    } catch (error) {
      setNamenext(""); // Restablecer el nombre siguiente si ocurre un error
    }
  };

  return (
    <div className="fondoGral">
      {error && (
        <div className="error">No se lograron cargar los pokemones</div>
      )}
      {isLoading ? (
        <div className="pokemon"></div>
      ) : (
        <div className={`contFull ${data.typecont}`}>
          <>
            <NavbarFull name={data.name} number={data.id} />

            <ImgFull
              image={data.imageFull}
              id={data.id}
              nameprev={nameprev}
              namenext={namenext}
            />
            <div className="aboutAndBase">
              <AboutFull
                weight={data.weight}
                height={data.height}
                ability={data.ability}
                type={data.type}
                typestyle={data.typestyle}
                id={data.id}
              />
              <BaseStats
                hp={data.hp}
                atk={data.attack}
                def={data.defence}
                satk={data.specialAttack}
                sdef={data.specialDefence}
                spd={data.speed}
                typestyle={data.typestyle}
                typecolor={data.typecolor}
              />
            </div>
          </>
        </div>
      )}
    </div>
  );
};
