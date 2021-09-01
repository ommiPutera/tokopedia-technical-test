import React from "react";
import "../styles/pokemon.css";

const ModalFailedAddPokemon = (props) => {
  return (
    <div className="warpper-modal-success">
      <div className="container-back-success">
        <div className="container-modal-success">
          <div>
            <p>
              {props.error === "nickname-already-exsist"
                ? "A pokemon with that nickname already exists, replace the nickname with a new one"
                : props.error === "less-character"
                ? "You must input at least 4 characters"
                : props.error === "too-many-character"
                ? "Too many characters, please reduce the characters"
                : ""}
            </p>
          </div>
          <div>
            <button onClick={props.closeModalFailed} className="okey">
              Okey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFailedAddPokemon;
