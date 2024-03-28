import { PokemonTypes } from '../pokemon';

export type MoveData = {
    accuracy: number;
    contest_combos: Contestcombos;
    contest_effect: Contesteffect;
    contest_type: {
        name: string;
        url: string;
    };
    damage_class: {
        name: string;
        url: string;
    };
    effect_chance?: number | null;
    effect_changes: {
        effect_entries: {
            effect: string;
            language: {
                name: string;
                url: string;
            };
        }[];
        version_group: {
            name: string;
            url: string;
        };
    }[];
    effect_entries: Effectentry[];
    flavor_text_entries: Flavortextentry[];
    generation: {
        name: string;
        url: string;
    };
    id: number;
    learned_by_pokemon: {
        name: string;
        url: string;
    }[];
    machines: Machine[];
    meta: Meta;
    name: string;
    names: Name[];
    past_values: {
        accuracy: number;
        effect_chance: number;
        power: number;
        pp: number;
        effect_entries: {
            effect: string;
            short_effect: string;
            language: {
                name: string;
                url: string;
            };
        }[];
        type: {
            name: string;
            url: string;
        };
        version_group: {
            name: string;
            url: string;
        };
    }[];
    power: number;
    pp: number;
    priority: number;
    stat_changes: {
        accuracy: number;
        effect_chance: number;
        power: number;
        pp: number;
        effect_entries: {
            effect: string;
            short_effect: string;
            language: {
                name: string;
                url: string;
            };
        }[];
        type: {
            name: string;
            url: string;
        };
        version_group: {
            name: string;
            url: string;
        };
    }[];
    super_contest_effect: Contesteffect;
    target: {
        name: string;
        url: string;
    };
    type: {
        name: PokemonTypes;
        url: string;
    };
};
type Name = {
    language: {
        name: string;
        url: string;
    };
    name: string;
};
type Meta = {
    ailment: {
        name: string;
        url: string;
    };
    ailment_chance: number;
    category: {
        name: string;
        url: string;
    };
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits?: number | null;
    max_turns?: number | null;
    min_hits?: number | null;
    min_turns?: number | null;
    stat_chance: number;
};
type Machine = {
    machine: Contesteffect;
    version_group: {
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
    version_group: {
        name: string;
        url: string;
    };
};
type Effectentry = {
    effect: string;
    language: {
        name: string;
        url: string;
    };
    short_effect: string;
};
type Contesteffect = {
    url: string;
};
type Contestcombos = {
    normal: Normal;
    super: Super;
};
type Super = {
    use_after?: null | {
        name: string;
        url: string;
    };
    use_before?: null | {
        name: string;
        url: string;
    };
};
type Normal = {
    use_after: {
        name: string;
        url: string;
    }[];
    use_before?: null | {
        name: string;
        url: string;
    };
};
