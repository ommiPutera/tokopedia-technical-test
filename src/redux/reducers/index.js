import { combineReducers } from "redux";
import PokemonReducers from "./pokemonReducers";

export default combineReducers({
  Pokemon: PokemonReducers,
});
