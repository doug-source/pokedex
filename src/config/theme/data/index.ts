import { AppTheme } from '../scheme';
import { arrow } from './arrow';
import { body } from './body';
import { evolutions } from './evolutions';
import { header } from './header';
import { home } from './home';
import { info } from './info';
import { inputFilter } from './inputFilter';
import { lines } from './lines';
import { list } from './list';
import { pokemon } from './pokemon';
import { stretcher } from './stretcher';
import { tabList } from './tabList';
import { tabPanel } from './tabPanel';

export const ThemeData: AppTheme = {
    body,
    header,
    pokemon,
    list,
    info,
    lines,
    tabList,
    tabPanel,
    evolutions,
    inputFilter,
    home,
    arrow,
    stretcher,

    screen: {
        medium: `screen and (min-width: 512px)`,
        wide: `screen and (min-width: 1024px)`,
    },
};
