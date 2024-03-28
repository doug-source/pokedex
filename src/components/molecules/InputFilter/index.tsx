import { useAppDispatch } from '../../../features/hooks';
import { filterPokemons } from '../../../features/pokemon/pokemons-slice';
import { useSearch } from '../../../features/pokemon/selectors';
import { InputFilterBox_, InputFilterSvg_, InputFilter_ } from './style';

export const InputFilter = () => {
    const search = useSearch();
    const appDispatch = useAppDispatch();
    return (
        <InputFilterBox_>
            <InputFilterSvg_ />
            <InputFilter_
                placeholder="Type the pokemon name"
                value={search}
                onChange={(evt) => {
                    appDispatch(filterPokemons(evt.target.value));
                }}
            />
        </InputFilterBox_>
    );
};
