import React, { useEffect, useState } from "react";
import { NavbarFull } from "./Component Full/NavbarFull";
import { ImgFull } from "./Component Full/ImgFull";
import { AboutFull } from "./Component Full/AboutFull";
import { BaseStats } from "./Component Full/BaseStats";
import { useParams } from "react-router-dom";

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
      });
    };
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  return (
    <div>
      <div>
        <p>FullScreens</p>
        <NavbarFull />
        <ImgFull image={data.image} />
        <AboutFull />
        <BaseStats />
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
