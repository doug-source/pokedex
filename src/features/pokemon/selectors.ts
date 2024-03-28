import { useAppSelector } from '../hooks';

export const usePokemonList = () =>
    useAppSelector((state) => state.pokemons.list);

export const usePaginationOffset = () =>
    useAppSelector((state) => state.pokemons.offset);

export const usePokemon = () =>
    useAppSelector((state) => state.pokemons.monster);

export const usePokemonStats = () =>
    useAppSelector((state) => state.pokemons.monster?.dataParsed?.stats);

export const useSearch = () => useAppSelector((state) => state.pokemons.search);

export const usePokemonLoading = () =>
    useAppSelector((state) => state.pokemons.pokemonLoading);

export const useTabSelected = () =>
    useAppSelector((state) => state.pokemons.tabSelected);

export const useMainImgLoadedStatus = () =>
    useAppSelector((state) => state.pokemons.mainImgLoaded);
