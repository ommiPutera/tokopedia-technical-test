import React from "react";
import "../styles/pokemon.css";

const MyPokemonCard = (props) => {
  return (
    <div className="my-pokemon-card">
      <div className="my-pokemon-nickname">
        <p>{props.nickname}</p>
      </div>
      <div className="my-pokemon-image">
        <img src={props.image} alt="pokemon-img" className="pokemon-img" />
      </div>
      <div className="my-pokemon-name">
        <p>{props.name}</p>
      </div>
      <div className="my-pokemon-types">
        <p>{props.types.map((val) => val).join(" / ")}</p>
        <p>Types</p>
      </div>
      <div className="remove-my-pokemon">
        <button onClick={props.onClick}>Remove</button>
      </div>
    </div>
  );
};

export default MyPokemonCard;
