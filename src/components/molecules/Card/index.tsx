import { useTheme } from 'styled-components';
import { navigations } from '../../../config/urls';
import { clearEvolutions } from '../../../features/evolution/evolutions-slice';
import { useAppDispatch } from '../../../features/hooks';
import { clearMove } from '../../../features/move/move-slice';
import {
    clearMonster,
    findPokemon,
    startMainImgLoad,
} from '../../../features/pokemon/pokemons-slice';
import { makeLonghand } from '../../../lib/styling';
import { CardBack } from '../../atoms/CardBack';
import { CardName } from '../../atoms/CardName';
import { CardNumber } from '../../atoms/CardNumber';
import { Img } from '../Img';
import { Card_ } from './style';

type CardProps = {
    id: number;
    name: string;
    srcUrl: string | null;
};

export const Card = ({ id, name, srcUrl }: CardProps) => {
    const theme = useTheme();
    const { imgBox } = theme.pokemon.card;
    const appDispatch = useAppDispatch();

    return (
        <Card_
            to={navigations.pokemons.show(name)}
            onClick={() => {
                appDispatch(clearMonster());
                appDispatch(clearMove());
                appDispatch(clearEvolutions());
                appDispatch(startMainImgLoad());
                appDispatch(findPokemon(id));
            }}
        >
            <CardBack />
            <CardName>{name}</CardName>
            <CardNumber>{id}</CardNumber>
            {srcUrl && (
                <Img
                    show
                    src={srcUrl}
                    alt={name}
                    $padding={makeLonghand<'inline'>(imgBox.padding)}
                    $minWidth={imgBox.minWidth}
                    $minWidthMedium={imgBox.medium.minWidth}
                    $minWidthWide={imgBox.wide.minWidth}
                    $paddingMedium={makeLonghand<'inline'>(
                        imgBox.medium.padding
                    )}
                />
            )}
        </Card_>
    );
};
