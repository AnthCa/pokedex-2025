import type { Pokemon as PokemonType } from './types/pokemon'
import { getAllPokemons, getPokemonByName, getPokemonByType } from './api/pokemon'
import { useEffect, useState } from 'react'
import { PokemonList } from './components/PokemonList'
import HeroBanner from './components/HeroBanner'
import FilterType from './components/FilterType'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const fetchAllPokemons = async () => {
    try {
      const pokemons = await getAllPokemons();  
      const pokemonData = await Promise.all(pokemons.map((pokemon: PokemonType) => getPokemonByName(pokemon.name)))
      setPokemons(pokemonData)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  const pokemonFiltered = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(debouncedSearch.toLowerCase()))

  const handleTypeSelect = async (type: string) => {
    setSelectedType(type); // actualiza el estado del tipo seleccionado
    const pokemonsByType = await getPokemonByType(type);
    const pokemonData = await Promise.all(
      pokemonsByType.map((pokemon: string) => getPokemonByName(pokemon))
    );
    setPokemons(pokemonData);
  };

  useEffect(() => {
    fetchAllPokemons()
  }, [])

  return (
    <main className="">
      <HeroBanner/>
      <div className="flex gap-4 container max-w-screen-lg w-full mx-auto p-4">
        <FilterType onTypeSelect={handleTypeSelect} selectedType={selectedType}/>
        <SearchBar onChange={(name: string) => setSearch(name)}/>
      </div>
      <div className="container max-w-screen-lg w-full mx-auto p-4">
        <PokemonList pokemons={pokemonFiltered}/>
      </div>
    </main>
  )
}

export default App
