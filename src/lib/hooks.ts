import { useEffect } from 'react';
import { fetchEvolution } from '../features/evolution/evolutions-slice';
import { useEvolutions } from '../features/evolution/selectors';
import { useAppDispatch } from '../features/hooks';
import { fetchMoves } from '../features/move/move-slice';
import { useMoveError, useMoves } from '../features/move/selectors';
import { fetchPokemons } from '../features/pokemon/pokemons-slice';
import { usePaginationOffset, usePokemon } from '../features/pokemon/selectors';

type MonsterData = ReturnType<typeof usePokemon>;
type EvolutionData = ReturnType<typeof useEvolutions>;

export const useEvolutionRequest = (
    monster: MonsterData,
    evolutions: EvolutionData
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (!monster || evolutions.length > 0) {
            return;
        }
        appDispatch(fetchEvolution(monster));
    }, [monster, evolutions, appDispatch]);
};

export const useMovesRequest = (monster: MonsterData) => {
    const moves = useMoves();
    const appDispatch = useAppDispatch();
    const error = useMoveError();
    const moveNames = monster?.dataParsed?.moves;
    useEffect(() => {
        if (error || !monster || moves.length || !moveNames?.length) {
            return;
        }
        appDispatch(fetchMoves(moveNames));
    }, [moves, monster, error, appDispatch, moveNames]);
    return [moves] as const;
};

export const usePokemonsRequest = () => {
    const appDispatch = useAppDispatch();
    const offset = usePaginationOffset();
    useEffect(() => {
        appDispatch(fetchPokemons({ offset }));
    }, [offset, appDispatch]);
};
