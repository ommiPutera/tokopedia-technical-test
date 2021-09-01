import React from "react";
import "../styles/pokemon.css";
import PokemonIcon from "../../simple_pokeball.png";

const LoadingCatching = () => {
  return (
    <div className="container-loading-catch">
      <div className="bounce">
        <img src={PokemonIcon} alt="poke-ball" />
      </div>
    </div>
  );
};

export default LoadingCatching;
