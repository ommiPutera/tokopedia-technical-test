import React from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/card/DetailCard";
import MyFooter from "../components/footer/MyFooter";
import Navigation from "../components/navigation/Navigation";
import "./styles/pokemon-page.css";

const PokemonDetail = () => {
  let params = useParams();
  let pokemonName = params.pokemonName;

  return (
    <>
      <div className="container">
      <Navigation />
        <div className="wrapper-pokemon-card-detail">
          <DetailCard pokemonName={pokemonName} />
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default PokemonDetail;
