import React, { createContext, useReducer, useEffect } from "react";
import PokemonReducer from "../reducers/PokemonReducer";

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [myPokemons, dispatch] = useReducer(PokemonReducer, [], () => {
    const localData = localStorage.getItem('pokemons');
    return localData ? JSON.parse(localData) : [];
  })
  
  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(myPokemons));
  }, [myPokemons]);

  return (
    <PokemonContext.Provider value={{ myPokemons, dispatch }}>
      {props.children}
    </PokemonContext.Provider>
  );
}
 
export default React.memo(PokemonContextProvider);