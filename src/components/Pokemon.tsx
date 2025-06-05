import type { Pokemon as PokemonType } from '../types/pokemon'
import { colorTypes } from '../consts/colorTypes'
import {useState} from 'react'
import RulerIcon from './icons/RulerIcon'
import WeightIcon from './icons/WeightIcon'
import ShinyIcon from './icons/ShinyIcon'
import NormalIcon from './icons/NormalIcon'

const Pokemon = ({pokemon}: {pokemon: PokemonType}) => {
  const [isShiny, setIsShiny] = useState(false)
  const sprite = isShiny ? pokemon.sprites.other.home.front_shiny : pokemon.sprites.other.home.front_default
  const type = pokemon.types.map((type) => type.type.name)

  const gradientColors = type
  .map(t => colorTypes[t as keyof typeof colorTypes])
  .filter(Boolean)
  .join(', ');

const backgroundStyle = {
  background: `linear-gradient(90deg, ${gradientColors})`,
};

  return (
    <article className="p-4 rounded-lg flex flex-col items-center relative overflow-hidden border-1 border-gray-700">
      <img
        className="drop-shadow-lg drop-shadow-white/20 size-52 mb-6"
        src={sprite}
        alt={pokemon.name}
      />
      <p className='absolute text-white/10 top-2 right-2 tracking-wider font-semibold text-2xl'>#{pokemon.id}</p>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
            {type.map((typeName) => (
              <div key={typeName}>
              <p className="text-white text-sm px-3 py-2 rounded-lg font-semibold capitalize text-shadow-xs text-shadow-black/50" style={{ backgroundColor: colorTypes[typeName as keyof typeof colorTypes] }}>
                {typeName}
              </p>
              </div>
            ))}
        </div>
        <h3 className="text-2xl font-semibold text-white capitalize">{pokemon.name}</h3>
        <div className="flex flex-col gap-2 text-white">
          <p className='flex items-center gap-1'><WeightIcon/> Peso: {pokemon.weight / 10} kg </p>
          <p className='flex items-center gap-1'> <RulerIcon/> Altura: {pokemon.height * 10} cm</p>
        </div>
        <div className="absolute w-full h-1/3 -z-10 blur-[80px] bottom-0 left-1/2 -translate-x-1/2" style={backgroundStyle}/>
        {pokemon.sprites.other.home.front_shiny && (
            <button className='p-1 bg-black rounded-full absolute top-2 left-2 cursor-pointer' onClick={() => setIsShiny(!isShiny)}>
              {isShiny ? <ShinyIcon className='size-10 text-white/50 animate-pulse' /> : <NormalIcon className='size-10 text-white/50 animate-pulse' />}
            </button>
        )}
      </div>
    </article>
  )
}

export default Pokemon