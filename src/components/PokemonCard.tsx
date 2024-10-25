interface PropsPokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: PropsPokemon) {
  console.log(pokemon);

  return (
    <section>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </section>
  );
}

export default PokemonCard;
