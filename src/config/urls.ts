export const navigations = {
    pokemons: {
        index: '/',
        show: (pokemonName?: string) => `/pokemon/${pokemonName ?? ':pokemon'}`,
    },
};

const api = 'https://pokeapi.co/api/v2';

export const endpoints = {
    pokemon: {
        image(id: number) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        },
        indexNames(offset: number, limit: number) {
            return `${api}/pokemon?offset=${offset}&limit=${limit}`;
        },
        show(pokemonName: string) {
            return `${api}/pokemon/${pokemonName}`;
        },
    },
    move: {
        show(moveName: string) {
            return `${api}/move/${moveName}`;
        },
    },
};
