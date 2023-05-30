import React, { useEffect, useState } from "react";
import { NavbarFull } from "./Component Full/NavbarFull";
import { ImgFull } from "./Component Full/ImgFull";
import { AboutFull } from "./Component Full/AboutFull";
import { BaseStats } from "./Component Full/BaseStats";
import { useParams } from "react-router-dom";
import "./Component Full/FullCss.css";

export const PokemonFullScreen = (props) => {
  let { pokemonName } = useParams();
  useEffect(() => {
    const fetchData = async () => {
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
        ability: pokemonData.abilities,
      });
    };
    fetchData();
  }, []);
  
  const [data, setData] = useState([]);
  return (
    <div className={`contFull ${data.typecont}`}>
      <NavbarFull name={data.name} number={data.id} />

      <ImgFull image={data.imageFull} />
      <div className="aboutAndBase">
        <AboutFull
          weight={data.weight}
          height={data.height}
          ability={data.ability}
          type={data.type}
          typestyle={data.typestyle}
        />
        <BaseStats
          hp={data.hp}
          atk={data.attack}
          def={data.defence}
          satk={data.specialAttack}
          sdef={data.specialDefence}
          spd={data.speed}
          typestyle={data.typestyle}
        />
      </div>
    </div>
  );
};

//   return (
//     <div className="containerPokedex">
//       {data.map((pokemon) => (
//         <div>
//           <a href="/pokemon">
//             <PokemonPreview
//               key={pokemon.id}
//               name={pokemon.name}
//               img={pokemon.image}
//               number={pokemon.id}
//             />
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };
