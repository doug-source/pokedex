import { useAppDispatch } from '../../../features/hooks';
import {
    decrementOffset,
    incrementOffset,
} from '../../../features/pokemon/pokemons-slice';
import {
    usePaginationOffset,
    usePokemonLoading,
} from '../../../features/pokemon/selectors';
import { Arrow } from '../../atoms/Arrow';
import { Stretcher } from '../../atoms/Stretcher';
import { Header_ } from './style';

export const Header = () => {
    const appDispatch = useAppDispatch();
    const pokemonsLoading = usePokemonLoading();
    const pokemonsOffset = usePaginationOffset();
    return (
        <Header_>
            Pokedex
            <Stretcher>
                <Arrow
                    $direction="top"
                    $disabled={pokemonsLoading || pokemonsOffset <= 0}
                    onClick={() => appDispatch(decrementOffset())}
                />
                <Arrow
                    $direction="bottom"
                    $disabled={pokemonsLoading}
                    onClick={() => appDispatch(incrementOffset())}
                />
            </Stretcher>
        </Header_>
    );
};
