import React, { useState, useEffect } from "react";
import LoadingCatching from "../loading/LoadingCatching";
import ModalCaughtPokemon from "./ModalCaughtPokemon";
import ModalPokemonBroke from "./ModalPokemonBroke";
import "../styles/pokemon.css";

const ModalCatchPokemon = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const addPokemon = () => {
    props.close();
  };

  const renderPokemonCaught = () => {
    if (Math.random() < 0.5) {
      return (
        <ModalCaughtPokemon
          pic={props.pic}
          name={props.name}
          addPokemon={addPokemon}
          types={props.types}
        />
      );
    } else {
      return <ModalPokemonBroke close={props.close} />;
    }
  };

  return <div>{loading ? <LoadingCatching /> : renderPokemonCaught()}</div>;
};

export default ModalCatchPokemon;
