import { useAppSelector } from '../hooks';

export const useMoves = () => useAppSelector((state) => state.move.list);

export const useMoveLoading = () =>
    useAppSelector((state) => state.move.loading);

export const useMoveError = () => useAppSelector((state) => state.move.error);
