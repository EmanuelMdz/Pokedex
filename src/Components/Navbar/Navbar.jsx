import React, { useState } from "react";
import "./navbar.css";
import pokebola from "./pokebola.png";

const Navbar = ({ data, filteredData, setFilteredData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [sortLabel, setSortLabel] = useState("#↓");

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchInput(searchValue);

    const filteredPokemon = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue)
    );

    setFilteredData(filteredPokemon);
  };

  const handleSort = () => {
    if (sortLabel === "#↓") {
      const sortedPokemon = [...filteredData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setFilteredData(sortedPokemon);
      setSortLabel("A\n↓\nZ");
    } else {
      setFilteredData(data);
      setSearchInput("");
      setSortLabel("#↓");
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="title_container">
          <img src={pokebola} alt="" className="pokebola" />
          <h1>Pokédex</h1>
        </div>
        <div className="sort_container">
          <button onClick={handleSort} className="btn_Filtro"> 
            <span>{sortLabel}</span>
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