import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import "./navbar.css";
import pokebola from "./pokebola.png"

const Navbar = ({ data, filteredData, setFilteredData }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchInput(searchValue);

    const filteredPokemon = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue)
    );

    setFilteredData(filteredPokemon);
  };

  const handleSort = () => {
    if (filteredData === data) {
      const sortedPokemon = [...data].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
  
      setFilteredData(sortedPokemon);
    } else {
      setFilteredData(data);
      setSearchInput("");
    }
  };
  return (
    <nav className="navbar">
      <div className="title_container">
        <img src={pokebola} alt="" className="pokebola"/>
        <h1>Pokédex</h1>
        <div className="sort_container">
            <button onClick={handleSort} className="">
              <span> AZ</span>
              <span>↓</span> 
            </button>
        </div>
      </div>
      <div className="search_container">
        <input
          className="input_search_bar"
          type="text"
          placeholder="Buscar"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
    
      
    </nav>
  );
};

export default Navbar;