import {
    SerializedError,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { endpoints } from '../../config/urls';
import { MoveData } from '../../types/api/move';
import { PokemonTypes } from '../../types/pokemon';

type Move = {
    id: number;
    name: string;
    text: string;
    type: PokemonTypes;
    power: number;
};

type MoveState = {
    list: Move[];
    loading: boolean;
    error: SerializedError | null;
};

const initialState: MoveState = {
    list: [],
    loading: false,
    error: null,
};

export const fetchMoves = createAsyncThunk(
    'moves/fetch',
    async (
        moveNames: string[],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _
    ): Promise<Move[]> => {
        const responses = await Promise.all(
            moveNames.map((moveName) => fetch(endpoints.move.show(moveName)))
        );
        const moves = (
            await Promise.all(responses.map((res) => res.json()))
        ).map((data: MoveData) => {
            return {
                id: data.id,
                name: data.name,
                text: data.flavor_text_entries.at(0)?.flavor_text ?? '',
                power: data.power,
                type: data.type.name,
            };
        });
        return moves;
    }
);

export const movesSlice = createSlice({
    name: 'moves',
    initialState,
    reducers: {
        clearMove: (state) => {
            state.list = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoves.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.list = action.payload;
            })
            .addCase(fetchMoves.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMoves.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
            });
    },
});

export const { clearMove } = movesSlice.actions;
export const movesReducer = movesSlice.reducer;
