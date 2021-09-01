const PokemonReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return [
        ...state,
        {
          name: action.pokemon.name,
          types: action.pokemon.types,
          pic: action.pokemon.pic,
          nickname: action.pokemon.nickname
        },
      ];
    case "REMOVE_POKEMON":
      return state.filter(pokemon => pokemon.nickname !== action.nickname);
    default:
      return state;
  }
};

export default PokemonReducer;
