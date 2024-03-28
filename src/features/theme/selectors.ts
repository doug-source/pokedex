import { useAppSelector } from '../hooks';

export const useThemeKey = () =>
    useAppSelector((state) => state.theme.themeKey);
