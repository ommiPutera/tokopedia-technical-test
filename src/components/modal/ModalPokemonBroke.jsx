import React from "react";
import "../styles/pokemon.css";

const ModalPokemonBroke = (props) => {
  return (
    <div className="container-modal-catch-broke">
      <div>
        <p>The pokemon broke free!</p>
      </div>
      <div>
        <button onClick={props.close}>Let's try again</button>
      </div>
    </div>
  );
};

export default ModalPokemonBroke;
