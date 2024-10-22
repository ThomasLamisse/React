function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[1];

  pokemon.imgSrc ? (
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      alt=""
    />
  ) : (
    <p>"???"</p>
  );
  return (
    <section>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
      </figure>
      <figcaption>Bulbasaur</figcaption>
    </section>
  );
}

export default PokemonCard;
