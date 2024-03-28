import {
    SerializedError,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { requestEvolutions, requestPokemons } from '../../lib/api';
import type { PokemonData } from '../../types/api/pokemon';

type PokemonListState = {
    list: PokemonData[];
    loading: boolean;
    error: SerializedError | null;
};

const initialState: PokemonListState = {
    list: [],
    loading: false,
    error: null,
};

export const fetchEvolution = createAsyncThunk(
    'evolutions/fetch',
    async (
        pokemonTarget: PokemonData,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _
    ): Promise<PokemonData[]> => {
        const evolutionNames = await requestEvolutions(pokemonTarget);
        const list = await requestPokemons(evolutionNames);
        return [pokemonTarget, ...list];
    }
);

export const evolutionsSlice = createSlice({
    name: 'evolutions',
    initialState,
    reducers: {
        clearEvolutions: (state) => {
            state.list = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvolution.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.list = payload;
            })
            .addCase(fetchEvolution.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvolution.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
            });
    },
});

export const { clearEvolutions } = evolutionsSlice.actions;
export const evolutionsReducer = evolutionsSlice.reducer;
