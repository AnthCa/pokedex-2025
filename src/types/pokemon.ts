export interface Pokemon {
    // types Lists of  pokemons
    id: number;
    name: string;
    // types inside pokemon
    weight: number;
    height: number;
    sprites: {
        front_default: string;
        other: {
            home: {
                front_default: string;
                front_shiny: string;
            }
        }
    }
    types: {
        type: {
            name: string;
        }
    }[]
}