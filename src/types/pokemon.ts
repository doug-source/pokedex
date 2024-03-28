import { pokemonTypes } from '../config/defaults';

export type PokemonTypes = (typeof pokemonTypes)[number];

export type PokemonStats =
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-defense'
    | 'speed';
