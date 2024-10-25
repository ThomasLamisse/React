import { useState } from "react";

interface Pokemon {
  pokemon: { name: string; imgSrc?: string };
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }: NavBarProps) {
  return (
    <div>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(pokemonIndex);
            pokemon.name === "pikachu" ? alert("PIKA PIKACHUUU !!!") : "";
          }}
        >
          {pokemon.name}
        </button>
      ))}
      ;
    </div>
  );
}

export default NavBar;
