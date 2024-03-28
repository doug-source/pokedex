import { Children, ComponentPropsWithoutRef } from 'react';
import { useMainImgLoadedStatus } from '../../../features/pokemon/selectors';
import { equalizeListSizes } from '../../../lib/array';
import { TabList } from '../TabList';
import { TabPanel } from '../TabPanel';
import { PokemonTabsTitle_, PokemonTabs_ as Tabs_ } from './style';

type TabListProps = Pick<ComponentPropsWithoutRef<typeof TabList>, 'titles'>;
type TabPanelProps = Pick<
    ComponentPropsWithoutRef<typeof TabPanel>,
    'children'
>;
type ChildrenProps = TabListProps & TabPanelProps;

type TabsProps = {
    order?: number;
} & ChildrenProps;

export const Tabs = ({ order = 1, titles, children }: TabsProps) => {
    const isMainImgLoaded = useMainImgLoadedStatus();
    const [titleList, contentList] = equalizeListSizes(
        titles,
        Children.toArray(children)
    );

    return (
        <Tabs_ className="tabs" $loaded={isMainImgLoaded}>
            <PokemonTabsTitle_ id={`tablist-${order}`} aria-hidden="true">
                Pokemon details
            </PokemonTabsTitle_>
            <TabList titles={titleList} order={order} />
            <TabPanel>{contentList}</TabPanel>
        </Tabs_>
    );
};
