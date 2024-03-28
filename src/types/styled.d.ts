import { AppTheme } from '../config/theme/scheme';

export type Loaded = {
    $loaded: boolean;
};

export type ThemeKey = 'dark' | 'light';

export type Sense = 'top' | 'right' | 'bottom' | 'left';

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme {}
}
