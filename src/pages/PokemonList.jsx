import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOAD_POKEMONS } from "../graphQL/Queries";
import { PokemonContext } from "../contexts/PokemonContext";
import PokemonCard from "../components/card/PokemonsCard";
import Navigation from "../components/navigation/Navigation";
import "./styles/pokemon-page.css";

const PokemonList = () => {
  const pokemonList = useQuery(LOAD_POKEMONS, {
    variables: {
      limit: 30,
      offset: 0,
    },
  });
  const [listPokemons, setListPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const { myPokemons } = useContext(PokemonContext);

  useEffect(() => {
    if (pokemonList.data) {
      setListPokemons(pokemonList.data.pokemons.results);
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [pokemonList.data]);

  const renderPokemonList = () => {
    return listPokemons.map((val, index) => {
      const ownedTotal = myPokemons.filter((pokemon) => {
        return pokemon.name === val.name;
      })

      return (
        <div key={index}>
          <Link to={`/pokemon/${val.name}`} className="link">
            <PokemonCard key={val.name} image={val.dreamworld} name={val.name} owned={ownedTotal.length} />
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      <Navigation />
      <div>
        <h1>Pokemon List</h1>
      </div>
      {loading ? (
        <div className="wrapper-pokemon-card">{renderPokemonList()}</div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};

export default PokemonList;
