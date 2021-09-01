import React, { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import "../styles/pokemon.css";

const ModalRemovePokemon = (props) => {
  const { myPokemons, dispatch } = useContext(PokemonContext);

  const yesRemoveCard = () => {
    dispatch({ type: "REMOVE_POKEMON", nickname: props.nickname })
    props.onClickClose()
    console.log(myPokemons)
  }

  return (
    <div className="warpper-modal-success">
      <div className="container-back-success">
        <div className="container-modal-success">
          <div>
            <p>Are you sure to remove this pokemon?</p>
          </div>
          <div>
            <button onClick={yesRemoveCard}>Yes, Removed</button>
            <button onClick={() => props.onClickClose()}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRemovePokemon;