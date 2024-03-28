import { Children, ReactNode } from 'react';
import { useEvolutionsLoading } from '../../../features/evolution/selectors';
import { useMoveLoading } from '../../../features/move/selectors';
import { useTabSelected } from '../../../features/pokemon/selectors';
import { PokeLoader } from '../../atoms/PokeLoader';
import { PokemonTabPanel_ as TabPanel_ } from './style';

type TabPanelProps = {
    contents?: ReactNode[];
    children: ReactNode;
    show?: boolean;
};

export const TabPanel = ({ children }: TabPanelProps) => {
    const tabSelected = useTabSelected();
    const loadingEvolution = useEvolutionsLoading();
    const moveLoading = useMoveLoading();
    return (
        <>
            <PokeLoader $show={moveLoading || loadingEvolution} />
            {Children.map(children, (child, i) => {
                if (i !== tabSelected) {
                    return null;
                }
                return (
                    <TabPanel_
                        id={`tabpanel-${i + 1}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${i + 1}`}
                    >
                        {child}
                    </TabPanel_>
                );
            })}
        </>
    );
};
