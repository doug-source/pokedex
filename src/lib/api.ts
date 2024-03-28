import { endpoints } from '../config/urls';
import { EvolutionChain } from '../types/api/evolutionChain';
import { PokemonData } from '../types/api/pokemon';
import { Species } from '../types/api/species';

export const requestEvolutions = async (data: PokemonData) => {
    const {
        species: { url },
    } = data;
    const pokSpecies: Species = await (await fetch(url)).json();
    const evolution: EvolutionChain = await (
        await fetch(pokSpecies.evolution_chain.url)
    ).json();
    const { chain } = evolution;
    return [
        chain.species.name,
        chain.evolves_to?.[0]?.species?.name,
        chain.evolves_to?.[0]?.evolves_to?.[0]?.species?.name,
    ].filter((val) => Boolean(val) && data.name !== val);
};

export const requestPokemon = async (
    pokemonName: string
): Promise<PokemonData> => {
    const res = await fetch(endpoints.pokemon.show(pokemonName));
    return res.json();
};

export const requestPokemons = async (list: string[]) => {
    return Promise.all(list.map((pokemonName) => requestPokemon(pokemonName)));
};
