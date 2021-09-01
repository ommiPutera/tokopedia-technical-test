import React from "react";
import "../styles/pokemon.css";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-card" key={props.name}>
      <div className="pokemon-name">
        <p>{props.name}</p>
      </div>
      <div className="pokemon-image">
        <img src={props.image} alt="pokemon-img" className="pokemon-img" />
      </div>
      <div className={` owned-total ${props.owned ? "owned" : ""}`}>
        <p className={props.owned ? "owned" : ""}>
          owned: <span>{props.owned}</span>
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
