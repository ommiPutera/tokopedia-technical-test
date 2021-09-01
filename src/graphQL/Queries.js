import { gql } from "@apollo/client";

export const LOAD_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        artwork
        dreamworld
      }
    }
  }
`;

export const LOAD_DETAIL_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      base_experience
      message
      height
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
