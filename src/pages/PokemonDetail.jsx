import React from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/card/DetailCard";
import "./styles/pokemon-page.css";

const PokemonDetail = () => {
  let params = useParams();
  let pokemonName = params.pokemonName;

  return (
    <div>
      <div className="wrapper-pokemon-card-detail">
        <DetailCard pokemonName={pokemonName} />
      </div>
    </div>
  );
};

export default PokemonDetail;
