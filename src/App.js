import React from "react";
import { Switch, Route } from "react-router-dom";
import PokemonContextProvider from "./contexts/PokemonContext";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonsList from "./pages/MyPokemonsList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <PokemonContextProvider>
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/pokemon/:pokemonName" exact component={PokemonDetail} />
          <Route path="/my-pokemons" exact component={MyPokemonsList} />
        </Switch>
      </PokemonContextProvider>
    </div>
  );
}

export default App;
