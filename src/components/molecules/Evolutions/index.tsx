import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { endpoints, navigations } from '../../../config/urls';
import { clearEvolutions } from '../../../features/evolution/evolutions-slice';
import { useEvolutions } from '../../../features/evolution/selectors';
import { useAppDispatch } from '../../../features/hooks';
import { clearMove } from '../../../features/move/move-slice';
import {
    clearMonster,
    findPokemon,
    startMainImgLoad,
} from '../../../features/pokemon/pokemons-slice';
import { usePokemon } from '../../../features/pokemon/selectors';
import { useEvolutionRequest } from '../../../lib/hooks';
import { makeLonghand } from '../../../lib/styling';
import { Img } from '../Img';
import { EvolutionBox_ } from './style';

type EvolutionsProps = {
    show?: boolean;
    monster: ReturnType<typeof usePokemon>;
};

export const Evolutions = ({ show, monster }: EvolutionsProps) => {
    const theme = useTheme();
    const evolutions = useEvolutions();
    const appDispatch = useAppDispatch();

    useEvolutionRequest(monster, evolutions);

    if (!show || !monster || !evolutions) {
        return null;
    }
    const { evolutions: evolTheme } = theme;
    const padding = makeLonghand<'inline'>(evolTheme.padding);
    return (
        <EvolutionBox_>
            {evolutions.map((evol) => {
                return (
                    <NavLink
                        key={evol.name}
                        to={navigations.pokemons.show(evol.name)}
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                            });
                            appDispatch(clearMonster());
                            appDispatch(clearMove());
                            appDispatch(clearEvolutions());
                            appDispatch(startMainImgLoad());
                            appDispatch(findPokemon(evol.id));
                        }}
                    >
                        <Img
                            show
                            key={evol.name}
                            src={`${endpoints.pokemon.image(evol.id)}`}
                            $padding={padding}
                            $minWidth={evolTheme.minWidth}
                            $minWidthMedium={evolTheme.medium.minWidth}
                            $minWidthWide={evolTheme.wide.minWidth}
                        />
                    </NavLink>
                );
            })}
        </EvolutionBox_>
    );
};
