import { PokemonStats, PokemonTypes } from '../pokemon';

export type PokemonInitialList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};

type AbilityBox = {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    };
};

type Cries = {
    latest: string;
    legacy: string;
};

type GameIndex = {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
};

type VersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    };
    version_group: {
        name: string;
        url: string;
    };
};

type Move = {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetail[];
};

type SpritesOther = {
    dream_world: {
        front_default: string | null;
        front_female: string | null;
    };
    home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    ['official-artwork']: {
        front_default: string | null;
        front_shiny: string | null;
    };
    showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
};

type GenerationI_item = {
    back_default: string | null;
    back_gray: string | null;
    back_transparent: string | null;
    front_default: string | null;
    front_gray: string | null;
    front_transparent: string | null;
};

type GenerationIV_item = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
};

type GenerationVI_item = {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
};

type SpritesVersions = {
    ['generation-i']: {
        ['red-blue']: GenerationI_item;
        yellow: GenerationI_item;
    };
    ['generation-ii']: {
        crystal: {
            back_default: string | null;
            back_shiny: string | null;
            back_shiny_transparent: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_shiny_transparent: string | null;
            front_transparent: string | null;
        };
        gold: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_transparent: string | null;
        };
        silver: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_transparent: string | null;
        };
    };
    ['generation-iii']: {
        emerald: {
            front_default: string | null;
            front_shiny: string | null;
        };
        ['firered-leafgreen']: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
        };
        ['ruby-sapphire']: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
        };
        ['generation-iv']: {
            ['diamond-pearl']: GenerationIV_item;
            ['heartgold-soulsilver']: GenerationIV_item;
            ['platinum']: GenerationIV_item;
        };
        ['generation-v']: {
            ['black-white']: {
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        ['generation-vi']: {
            ['omegaruby-alphasapphire']: GenerationVI_item;
            ['x-y']: GenerationVI_item;
        };
        ['generation-vii']: {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            ['ultra-sun-ultra-moon']: {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        ['generation-viii']: {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    };
};

type Sprites = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: SpritesOther;
    versions: SpritesVersions;
};

type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: PokemonStats;
        url: string;
    };
};

type TypeItem = {
    slot: number;
    type: {
        name: PokemonTypes;
        url: string;
    };
};

export type PokemonData = {
    abilities: AbilityBox[];
    base_experience: number;
    cries: Cries;
    forms: {
        name: string;
        url: string;
    }[];
    game_indices: GameIndex[];
    height: number;
    held_items: {
        item: {
            name: PokemonTypes;
            url: string;
        };
        version_details: {
            version: {
                name: PokemonTypes;
                url: string;
            };
            rarity: number;
        };
    }[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: {
        generation: {
            name: PokemonTypes;
            url: string;
        };
        types: {
            slot: number;
            type: {
                name: PokemonTypes;
                url: string;
            };
        };
    }[];
    species: {
        name: string;
        url: string;
    };
    sprites: Sprites;
    stats: Stat[];
    types: TypeItem[];
    weight: number;

    dataParsed: {
        height: string;
        weight: string;
        abilities: string | string[];
        moves: string[];
        stats: Array<[PokemonStats, number]>;
        evolutions?: string[];
    };
};
