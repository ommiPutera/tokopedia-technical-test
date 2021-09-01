import React, { useContext, useState } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import caughtBg from "../../catch-bg.jpg";
import ModalSuccessAddPokemon from "./ModalSuccessAddPokemon";
import ModalFailedAddPokemon from "./ModalFailedAddPokemon";
import "../styles/pokemon.css";

const ModalCaughtPokemon = (props) => {
  const { myPokemons, dispatch } = useContext(PokemonContext);
  const [nickname, setNickname] = useState("");
  const [inputError, setInputError] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const handleAddPokemon = (e) => {
    const dataPokemon = {
      name: props.name,
      types: props.types,
      nickname: nickname,
      pic: props.pic
    };
    e.preventDefault();
    const searchNickname = myPokemons.filter(
      (val) => val.nickname.toLowerCase() === nickname.toLowerCase()
    );
    if (searchNickname.length || nickname.length < 4 || nickname.length === 0 || nickname.length > 11) {
      if (searchNickname.length) {
        setInputError("nickname-already-exsist");
      } else if (nickname.length < 4 || nickname.length === 0) {
        setInputError("less-character");
      } else if (nickname.length > 11) {
        setInputError("too-many-character");
      }
      setModalFailed(!modalFailed);
    } else {
      setModalSuccess(!modalFailed);
      dispatch({ type: "ADD_POKEMON", pokemon: dataPokemon });
    }
  };

  const closeModalFailed = () => {
    setModalFailed(!modalFailed);
  };

  return (
    <>
      {modalSuccess ? <ModalSuccessAddPokemon /> : null}
      {modalFailed ? (
        <ModalFailedAddPokemon
          closeModalFailed={closeModalFailed}
          error={inputError}
        />
      ) : null}
      <div className="container-modal-catch">
        <img src={caughtBg} alt="bg" className="bg-caught" />
        <div className="wrapper-modal">
          <p>yeay, gotcha!</p>
          <div className="container-edit-pokemon">
            <div>
              <img
                src={props.pic}
                alt="pokemon-pic"
                className="pic-caught-pokemon"
              />
              <p className="modal-pokemon-caugth">
                {props.name} <span>was caught</span>
              </p>
            </div>
            <div>
              <p>*Give a nickname to your pokemon</p>
              <form onSubmit={handleAddPokemon}>
                <input
                  type="text"
                  placeholder="Pokemon Nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </form>
              <div className="button-add-pokemon">
                <button onClick={handleAddPokemon}>Add to My Pokemon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCaughtPokemon;
