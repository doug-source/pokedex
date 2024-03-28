import { configureStore } from '@reduxjs/toolkit';
import { evolutionsReducer } from './evolution/evolutions-slice';
import { movesReducer } from './move/move-slice';
import { pokemonsReducer } from './pokemon/pokemons-slice';
import { themeReducer } from './theme/theme-slice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        pokemons: pokemonsReducer,
        move: movesReducer,
        evolution: evolutionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
