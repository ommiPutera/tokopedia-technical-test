import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/pokemon.css";

const ModalSuccessAddPokemon = () => {
  let history = useHistory();
  return (
    <div className="warpper-modal-success">
      <div className="container-back-success">
        <div className="container-modal-success">
          <div>
            <p>Your pokemon has been successfully added to My Pokemons page</p>
          </div>
          <div>
            <button onClick={() => history.push("/my-pokemons")}>
              Go to My Pokemons page
            </button>
            <button onClick={() => history.push("/")}>List Pokemons</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessAddPokemon;
