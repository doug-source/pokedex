import { DefaultTheme } from 'styled-components';
import { remValue } from '../../../lib/styling';

export const list: DefaultTheme['list'] = {
    medium: {
        maxWidth: '90%',
        gap: `${remValue(32)}rem`,
    },
    wide: {
        maxWidth: '70%',
        gap: `${remValue(32)}rem`,
    },
};
