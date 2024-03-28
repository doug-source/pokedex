import { useAppSelector } from '../hooks';

export const useEvolutions = () =>
    useAppSelector((state) => state.evolution.list);

export const useEvolutionsLoading = () =>
    useAppSelector((state) => state.evolution.loading);

export const useEvolutionsError = () =>
    useAppSelector((state) => state.evolution.error);
