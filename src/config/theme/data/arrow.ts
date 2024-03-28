import { DefaultTheme } from 'styled-components';
import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';

export const arrow: DefaultTheme['arrow'] = {
    size: `${remValue(25)}rem`,
    borderWidth: `${remValue(10)}rem`,
    borderColor: palette.black[1],
    borderLeft: '0',
    borderTop: '0',
    disabled: {
        borderColor: palette.gray[2],
    },
};
