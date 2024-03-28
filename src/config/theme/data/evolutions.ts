import { DefaultTheme } from 'styled-components';
import { remValue } from '../../../lib/styling';

export const evolutions: DefaultTheme['evolutions'] = {
    padding: {
        inline: `${remValue(6.5 * 16)}rem`,
        top: `0`,
        bottom: '0',
    },
    minWidth: `${remValue(50)}rem`,
    medium: {
        minWidth: `${remValue(178)}rem`,
    },
    wide: {
        minWidth: `${remValue(212)}rem`,
    },
};
