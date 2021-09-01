import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/pokemon.css";

const Navigation = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === "/my-pokemons") {
      setActive(true);
    }
  }, []);

  return (
    <div className="navigation-container">
      <Link
        to="/"
        className={`list-pokemons ${active ? "notactive" : "activeNav"} link`}
      >
        <div>
          <p>List Pokemons</p>
        </div>
      </Link>
      <Link
        to="/my-pokemons"
        className={`my-pokemons ${active ? "activeNav" : "notactive"} link`}
      >
        <div>
          <p>My pokemons</p>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Navigation);
