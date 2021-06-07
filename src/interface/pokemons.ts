export interface IPokemons {
    total: number,
    pokemons: PokemonRequest[]
}

let pokemonsData = {
    "name_clean": "charmeleon",
    "abilities": [
        "blaze",
        "solar-power"
    ],
    "stats": {
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "special-attack": 80,
        "special-defense": 65,
        "speed": 80
    },
    "types": [
        "fire"
    ],
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "name": "charmeleon",
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "order": 6,
    "weight": 190
};

export type PokemonRequest = typeof pokemonsData;

export type ITypesRequest = string[];