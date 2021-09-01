import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_DETAIL_POKEMON } from "../../graphQL/Queries";
import { LOAD_POKEMONS } from "../../graphQL/Queries";
import { DataAboutPokemon } from "../localData/DataAboutPokemon";
import ModalCatchPokemon from "../modal/ModalCatchPokemon";
import "../styles/pokemon.css";

const useMountEffect = (fun) => useEffect(fun);

const DetailCard = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonPic, setPokemonPic] = useState([]);
  const [ability, setAbility] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [moveActive, setMoveActive] = useState(false);
  const [caught, setCaught] = useState(false);
  const [loading, setLoading] = useState(false);

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  useMountEffect(executeScroll);

  const detailPokemon = useQuery(LOAD_DETAIL_POKEMON, {
    variables: { name: props.pokemonName },
  });
  const pokemonList = useQuery(LOAD_POKEMONS, {
    variables: {
      limit: 30,
      offset: 0,
    },
  });

  useEffect(() => {
    if (detailPokemon.data && pokemonList.data) {
      const Data = detailPokemon.data.pokemon;
      const Moves = [];
      const Ability = [];
      const Types = [];
      for (let i = 0; i < Data.abilities.length; i++) {
        Ability.push(Data.abilities[i].ability.name);
      }
      for (let i = 0; i < Data.types.length; i++) {
        Types.push(Data.types[i].type.name);
      }
      for (let i = 0; i < Data.moves.length; i++) {
        Moves.push(Data.moves[i].move.name);
      }
      let listPokemons = [...pokemonList.data.pokemons.results];
      let pokemonPic = listPokemons.filter((val) => val.id === Data.id);
      setPokemonDetail(Data);
      setPokemonPic(pokemonPic[0].dreamworld);
      setAbility(Ability);
      setTypes(Types);
      setMoves(Moves);
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [detailPokemon.data, pokemonList.data]);

  const moreClick = () => {
    setMoveActive(true);
    executeScroll();
  };

  const catchPokemon = () => {
    setCaught(!caught);
  };

  const closeModal = () => {
    setCaught(!caught);
  };

  const printAbout = () => {
    const dataAbout = DataAboutPokemon.filter(
      (val) => val.name === pokemonDetail.name
    );
    return (
      <div className="container-p-about">
        <p className="p-about">
          <span>{pokemonDetail.name}</span>{" "}
          {dataAbout[0] ? dataAbout[0].about + "..." : ""}
        </p>
      </div>
    );
  };

  return (
    <div>
      <div>
        {caught ? (
          <>
            <ModalCatchPokemon
              pic={pokemonPic}
              name={pokemonDetail.name}
              types={types}
              close={closeModal}
            />
          </>
        ) : null}
      </div>
      <div className="detail-card-container">
        <div className="container-image-pokemon">
          <img src={pokemonPic} alt="pokemon-pic" />
          <div>
            {moves.slice(0, 2).map((val, index) => {
              return <p key={index}>{val}</p>;
            })}
            <p onClick={moreClick}>more move</p>
          </div>
        </div>

        <div className="container-data">
          <div className="detail-data-container">
            <p className="pokemon-name-detail">{pokemonDetail.name}</p>
            <div className="data-2 top">
              <div>
                <p>
                  {pokemonDetail.weight / 10}{" "}
                  <span className="kg-and-m-style">Kg</span>
                </p>
                <p>weight</p>
              </div>
              <div>
                <p>{types.map((val) => val).join(" / ")}</p>
                <p>Types</p>
              </div>
              <div>
                <p>
                  {pokemonDetail.height / 10}{" "}
                  <span className="kg-and-m-style">M</span>
                </p>
                <p>height</p>
              </div>
            </div>
            <div className="data-2 bottom">
              <div>
                <p>{ability.map((val) => val).join(" / ")}</p>
                <p>ability</p>
              </div>
            </div>
            <div className="container-button-catch">
              <p>Let's catch-it, show that luck is with you!</p>
              <button onClick={catchPokemon}>Catch</button>
            </div>
          </div>
        </div>
        <div className="container-moves">
          <div ref={myRef}>
            <p
              className={`navigation moves ${moveActive ? "active" : ""}`}
              onClick={() => setMoveActive(true)}
            >
              moves
            </p>
            <p
              className={`navigation about ${moveActive ? "" : "active"}`}
              onClick={() => setMoveActive(false)}
            >
              about the pokemon
            </p>
          </div>
          {moveActive ? (
            <div className="card-moves">
              {moves.slice(2).map((val, index) => {
                return (
                  <p key={index} className="p-moves">
                    {val}
                  </p>
                );
              })}
            </div>
          ) : (
            printAbout()
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
