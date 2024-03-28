import { PokemonTypes } from '../pokemon';

type Pokemon = {
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
};

type Name = {
    language: {
        name: string;
        url: string;
    };
    name: string;
};

type Gameindex = {
    game_index: number;
    generation: {
        name: string;
        url: string;
    };
};

type Damagerelations = {
    no_damage_to: {
        name: PokemonTypes;
        url: string;
    }[];
    half_damage_to: {
        name: PokemonTypes;
        url: string;
    }[];
    double_damage_to: {
        name: PokemonTypes;
        url: string;
    }[];
    no_damage_from: {
        name: PokemonTypes;
        url: string;
    }[];
    half_damage_from: {
        name: PokemonTypes;
        url: string;
    }[];
    double_damage_from: {
        name: PokemonTypes;
        url: string;
    }[];
};

export type TypeData = {
    damage_relations: Damagerelations;
    game_indices: Gameindex[];
    generation: {
        name: string;
        url: string;
    };
    id: number;
    move_damage_class: {
        name: string;
        url: string;
    };
    moves: {
        name: string;
        url: string;
    }[];
    name: string;
    names: Name[];
    past_damage_relations: {
        generation: {
            name: string;
            url: string;
        };
        damage_relations: Damagerelations;
    }[];
    pokemon: Pokemon[];
};
