import { useAppDispatch } from '../../../features/hooks';
import { selectTabIndex } from '../../../features/pokemon/pokemons-slice';
import { useTabSelected } from '../../../features/pokemon/selectors';
import {
    TabListBtn_ as Btn_,
    TabListBtnText_ as BtnText_,
    TabList_,
} from './style';

type TabListProps = {
    titles: string[];
    order?: number;
};

export const TabList = ({ titles, order = 1 }: TabListProps) => {
    const appDispatch = useAppDispatch();
    const tabSelected = useTabSelected();
    if (titles.length === 0) {
        return null;
    }
    return (
        <TabList_
            role="tablist"
            aria-labelledby={`tablist-${order}`}
            className="manual"
        >
            {titles.map((title, i) => (
                <Btn_
                    id={`tab-${i + 1}`}
                    type="button"
                    role="tab"
                    aria-selected={`${tabSelected === i ? 'true' : 'false'}`}
                    aria-controls={`tabpanel-${i + 1}`}
                    tabIndex={i === 0 ? undefined : -1}
                    key={title}
                    onClick={() => appDispatch(selectTabIndex(i))}
                >
                    <BtnText_ className="focus" $selected={tabSelected === i}>
                        {title}
                    </BtnText_>
                </Btn_>
            ))}
        </TabList_>
    );
};
