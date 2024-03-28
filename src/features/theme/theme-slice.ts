import { createSlice } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';
import { ThemeData } from '../../config/theme/data';
import { ThemeKey } from '../../types/styled';

type ThemeState = {
    themeKey: ThemeKey;
    data: DefaultTheme;
};

const initialState: ThemeState = {
    themeKey: 'light',
    data: ThemeData,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.themeKey = state.themeKey === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
