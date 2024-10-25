import { useState } from "react";

interface Pokemon {
  pokemon: { name: string; imgSrc?: string };
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const pokemonIndexPrecedent = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const pokemonIndexSuivant = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={pokemonIndexPrecedent}>Précédent</button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={pokemonIndexSuivant}>Suivant</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
