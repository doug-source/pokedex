import {
    usePokemonList,
    usePokemonLoading,
} from '../../../features/pokemon/selectors';
import { usePokemonsRequest } from '../../../lib/hooks';
import { pickArtWorkSprite } from '../../../lib/pokemon';
import { PokeLoader } from '../../atoms/PokeLoader';
import { Card } from '../Card';
import { List_, Overlay_ } from './style';

export const List = () => {
    const loading = usePokemonLoading();
    const list = usePokemonList();
    usePokemonsRequest();
    return (
        <>
            {loading && <Overlay_ />}
            <PokeLoader $show={loading} />
            <List_>
                {list.map((pokemon) => {
                    const srcUrl = pickArtWorkSprite(pokemon);
                    return (
                        <Card
                            key={pokemon.name}
                            id={pokemon.id}
                            name={pokemon.name}
                            srcUrl={srcUrl}
                        />
                    );
                })}
            </List_>
        </>
    );
};
