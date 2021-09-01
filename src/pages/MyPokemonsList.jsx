import React, { useContext, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import Navigation from "../components/navigation/Navigation";
import MyPokemonCard from "../components/card/MyPokemonCard";
import ModalRemovePokemon from "../components/modal/ModalRemovePokemon";
import "./styles/pokemon-page.css";

const MyPokemonsList = () => {
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [nicknameProp, setNicknameProp] = useState("");
  const { myPokemons } = useContext(PokemonContext);

  const removeCardPokemon = (nick) => {
    setOpenModalRemove(!openModalRemove);
    setNicknameProp(nick)
  };
  const closeModal = () => {
    setOpenModalRemove(!openModalRemove)
  }

  const renderMyPokemons = () => {
    return myPokemons.map((val, index) => {
      return (
        <div key={index}>
          <MyPokemonCard
            image={val.pic}
            types={val.types}
            nickname={val.nickname}
            name={val.name}
            onClick={() => removeCardPokemon(val.nickname)}
          />
        </div>
      );
    });
  };

  return (
    <div>
      {openModalRemove ? <ModalRemovePokemon nickname={nicknameProp} onClickClose={() => closeModal()} /> : null}
      <Navigation />
      <div>
        <h1>My Pokemons List</h1>
      </div>
      <div className="wrapper-pokemon-card my-pokemons">
        {renderMyPokemons()}
      </div>
    </div>
  );
};

export default MyPokemonsList;
