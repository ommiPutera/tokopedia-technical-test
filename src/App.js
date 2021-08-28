import React from "react";
import PokemonList from "./components/PokemonList";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={PokemonList} />
      </Switch>
    </div>
  );
}

export default App;
