type Variety = {
    is_default: boolean;
    pokemon: {
        name: string;
        url: string;
    };
};

type Pokedexnumber = {
    entry_number: number;
    pokedex: {
        name: string;
        url: string;
    };
};

type Palparkencounter = {
    area: {
        name: string;
        url: string;
    };
    base_score: number;
    rate: number;
};

type Name = {
    language: {
        name: string;
        url: string;
    };
    name: string;
};

type Genus = {
    genus: string;
    language: {
        name: string;
        url: string;
    };
};

type Flavortextentry = {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
};

type Evolutionchain = {
    url: string;
};

export type Species = {
    base_happiness: number;
    capture_rate: number;
    color: {
        name: string;
        url: string;
    };
    egg_groups: {
        name: string;
        url: string;
    }[];
    evolution_chain: Evolutionchain;
    evolves_from_species?: {
        name: string;
        url: string;
    } | null;
    flavor_text_entries: Flavortextentry[];
    form_descriptions: {
        name: string;
        url: string;
    }[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: {
        name: string;
        url: string;
    };
    growth_rate: {
        name: string;
        url: string;
    };
    habitat: {
        name: string;
        url: string;
    };
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Name[];
    order: number;
    pal_park_encounters: Palparkencounter[];
    pokedex_numbers: Pokedexnumber[];
    shape: {
        name: string;
        url: string;
    };
    varieties: Variety[];
};
