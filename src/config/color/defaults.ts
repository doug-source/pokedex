import { PokemonTypes } from '../../types/pokemon';

type ColorTypesScheme = {
    label: Record<PokemonTypes, string>;
    background: Record<PokemonTypes, string>;
};

export const colorTypes: ColorTypesScheme = {
    label: {
        dark: '#707070',
        normal: '#A4ACAF',
        fighting: '#FFFFFF',
        flying: '#3DC7EF',
        poison: '#B97FC9',
        ground: '#AB9842',
        rock: '#A38C21',
        bug: '#729F3F',
        ghost: '#7B62A3',
        steel: '#9EB7B8',
        fire: '#FD7D24',
        water: '#4592C4',
        grass: '#9BCC50',
        electric: '#EED535',
        psychic: '#F366B9',
        ice: '#51C4E7',
        dragon: '#F16E57',
        fairy: '#FDB9E9',
        unknown: '#F2F2F2',
        shadow: '#000',
    },
    background: {
        dark: '',
        normal: '',
        fighting: '',
        flying: '',
        poison: '',
        ground: '',
        rock: '',
        bug: '',
        ghost: '',
        steel: '',
        fire: '',
        water: '',
        grass: '',
        electric: '',
        psychic: '',
        ice: '',
        dragon: '',
        fairy: '',
        unknown: '',
        shadow: '',
    },
};
