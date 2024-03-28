import { DefaultTheme } from 'styled-components';
import { remValue } from '../../../lib/styling';

export const stretcher: DefaultTheme['stretcher'] = {
    position: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
    },
    padding: {
        inline: `${remValue(16)}rem`,
    },
};
