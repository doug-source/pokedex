import {
    PayloadAction,
    SerializedError,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { defaults } from '../../config/defaults';
import { endpoints } from '../../config/urls';
import { requestEvolutions } from '../../lib/api';
import { convertMetric, convertWeight } from '../../lib/math';
import { extractAbility } from '../../lib/pokemon';
import type { PokemonData, PokemonInitialList } from '../../types/api/pokemon';

type PokemonListState = {
    list: PokemonData[];
    total: PokemonData[];

    monster: PokemonData | null;

    pokemonLoading: boolean;
    error: SerializedError | null;

    offset: number;
    search: string;
    tabSelected: number;
    mainImgLoaded: boolean;
};

const initialState: PokemonListState = {
    list: [],
    total: [],

    monster: null,

    pokemonLoading: true,
    error: null,
    offset: defaults.offset,
    search: '',
    tabSelected: 0,
    mainImgLoaded: false,
};

type ThunkAsyncArg = {
    offset: number;
    limit?: number;
};

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetch',
    async (
        { offset, limit = defaults.limit }: ThunkAsyncArg,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _
    ): Promise<PokemonData[]> => {
        const res = await fetch(endpoints.pokemon.indexNames(offset, limit));
        const data: PokemonInitialList = await res.json();
        const pokemonList: PokemonData[] = await Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(endpoints.pokemon.show(item.name));
                const pokemon: PokemonData = await res.json();
                const evolutionNames = await requestEvolutions(pokemon);

                pokemon.dataParsed = {
                    abilities: extractAbility(pokemon),
                    height: `${convertMetric(
                        pokemon.height,
                        'dm',
                        'cm'
                    )} cm(s)`,
                    weight: `${convertWeight(
                        pokemon.weight,
                        'hectograms',
                        'kilograms'
                    )} kg(s)`,
                    moves: pokemon.moves.map(({ move }) => move.name),
                    stats: pokemon.stats.map((item) => [
                        item.stat.name,
                        item.base_stat,
                    ]),
                    evolutions: evolutionNames,
                };
                return pokemon;
            })
        );
        return pokemonList;
    }
);

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        filterPokemons(state, { payload }: PayloadAction<string>) {
            state.search = payload.trim();
            state.list = state.total.filter((item) =>
                item.name.toLowerCase().includes(state.search.toLowerCase())
            );
        },
        incrementOffset(state) {
            state.offset += defaults.limit;
        },
        decrementOffset(state) {
            const newOffset = state.offset - defaults.limit;
            if (newOffset < 0) {
                return;
            }
            state.offset = newOffset;
        },
        findPokemon(state, { payload }: PayloadAction<PokemonData['id']>) {
            const monster = state.total.find(
                (pokemon) => pokemon.id === payload
            );
            if (monster) {
                state.monster = monster;
            }
        },
        clearMonster: (state) => {
            state.monster = null;
        },
        selectTabIndex: (state, { payload }: PayloadAction<number>) => {
            state.tabSelected = payload;
        },
        startMainImgLoad: (state) => {
            state.mainImgLoaded = false;
        },
        finishMainImgLoad: (state) => {
            state.mainImgLoaded = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.error = null;
                state.pokemonLoading = false;
                state.total = action.payload;
                state.list = [...action.payload];
            })
            .addCase(fetchPokemons.pending, (state) => {
                state.pokemonLoading = true;
                state.error = null;
            })
            .addCase(fetchPokemons.rejected, (state, { error }) => {
                switch (error.code) {
                    case '404':
                        state.offset -= defaults.limit;
                        break;
                    default:
                        state.error = error;
                        break;
                }
            });
    },
});

export const {
    filterPokemons,
    decrementOffset,
    incrementOffset,
    clearMonster,
    finishMainImgLoad,
    findPokemon,
    selectTabIndex,
    startMainImgLoad,
} = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;
