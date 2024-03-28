type Chain = {
    evolution_details: Evolutiondetail[];
    evolves_to: Chain[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    };
};

type Evolutiondetail = {
    gender?: number | null;
    held_item?: null | {
        name: string;
        url: string;
    };
    item?: null | {
        name: string;
        url: string;
    };
    known_move?: null | {
        name: string;
        url: string;
    };
    known_move_type?: null | {
        name: string;
        url: string;
    };
    location?: null | {
        name: string;
        url: string;
    };
    min_affection?: number | null;
    min_beauty?: number | null;
    min_happiness?: number | null;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species?: null | {
        name: string;
        url: string;
    };
    party_type?: null | {
        name: string;
        url: string;
    };
    relative_physical_stats?: number | null;
    time_of_day: string;
    trade_species?: null | {
        name: string;
        url: string;
    };
    trigger: {
        name: string;
        url: string;
    };
    turn_upside_down: boolean;
};

export type EvolutionChain = {
    baby_trigger_item?: null | {
        name: string;
        url: string;
    };
    chain: Chain;
    id: number;
};
