const BASE_URL = "https://pokeapi.co/api/v2";

export const getAllPokemons = async () => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=30`)
        if (!response.ok) {
            throw new Error("Failed to fetch pokemons")
        }
        const data = await response.json()
        return data.results
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const getPokemonByName = async (name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${name}`)
        if (!response.ok) {
            throw new Error("Failed to fetch pokemon")
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const getPokemonByType = async (type: string) => {
    try {
        const response = await fetch(`${BASE_URL}/type/${type}`);
        if (!response.ok) {
            throw new Error("Failed to fetch pokemon");
        }

        const data = await response.json();

        const pokemonsName = data.pokemon
            .map((poke: { pokemon: { name: string; url: string } }) => {
                const url = poke.pokemon.url;
                const match = url.match(/\/pokemon\/(\d+)\//);
                const id = match ? parseInt(match[1]) : 0;
                return {
                    name: poke.pokemon.name,
                    id,
                };
            })
            .filter((p: { id: number }) => p.id <= 300) // Solo pokémon hasta la gen 8
            .map((p: { name: string }) => p.name); // Ahora sí, solo los nombres válidos

        return pokemonsName;
    } catch (err) {
        console.log(err);
        throw err;
    }
};