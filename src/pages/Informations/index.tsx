import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Details } from '../../components/molecules/Details';
import { Evolutions } from '../../components/molecules/Evolutions';
import { Img } from '../../components/molecules/Img';
import { InfoHeading } from '../../components/molecules/InfoHeading';
import { Moves } from '../../components/molecules/Moves';
import { Stats } from '../../components/molecules/Stats';
import { Tabs } from '../../components/molecules/Tabs';
import { pokemonDetails, pokemonTabTitles } from '../../config/defaults';
import { endpoints } from '../../config/urls';
import {
    useMainImgLoadedStatus,
    usePokemon,
} from '../../features/pokemon/selectors';
import { useThemeKey } from '../../features/theme/selectors';
import { GlobalStyleInfo } from '../../global-style';
import { makeLonghand } from '../../lib/styling';
import {
    PokemonInfoBack_ as Background,
    PokemonInfo_ as DetailsBox_,
    PokemonInfoReturnLink_ as ReturnLink,
    PokemonInfoResturnSvg_ as ReturnSvg,
} from './style';

type InformationsProps = {
    className?: string;
};

export const Informations = ({ className }: InformationsProps) => {
    const { pokemon: pokemonName } = useParams();
    const monster = usePokemon();
    const theme = useTheme();
    const themeKey = useThemeKey();
    const isMainImgLoaded = useMainImgLoadedStatus();

    const { padding, minWidth, medium, wide } = theme.info;
    const paddingLonghand = makeLonghand<'inline'>(padding);
    if (!monster) {
        return null;
    }
    return (
        <>
            <GlobalStyleInfo />
            <DetailsBox_ className={className}>
                <ReturnLink to="/">
                    <ReturnSvg />
                </ReturnLink>
                <Background $loaded={isMainImgLoaded} $themeKey={themeKey} />
                <Img
                    show={Boolean(monster)}
                    $padding={paddingLonghand}
                    $minWidth={minWidth}
                    $minWidthMedium={medium.minWidth}
                    $minWidthWide={wide.minWidth}
                    src={endpoints.pokemon.image(monster?.id ?? 0)}
                    alt={pokemonName}
                />
                <InfoHeading pokemonName={pokemonName} />
                <Tabs titles={pokemonTabTitles}>
                    <Details
                        show={Boolean(monster)}
                        monster={monster}
                        details={pokemonDetails}
                    />
                    <Moves show={Boolean(monster)} monster={monster} />
                    <Stats show={Boolean(monster)} />
                    <Evolutions show={Boolean(monster)} monster={monster} />
                </Tabs>
            </DetailsBox_>
        </>
    );
};
