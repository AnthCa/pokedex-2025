import type { Pokemon as PokemonType } from '../types/pokemon'
import Pokemon from './Pokemon'

export const PokemonList = ({pokemons}: {pokemons: PokemonType[]}) => {
    return (
      <div className="container max-w-screen-lg w-full mx-auto p-4">
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
          </ul>
      </div>
    )
}