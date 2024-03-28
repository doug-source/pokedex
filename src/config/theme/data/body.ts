import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';
import { AppTheme } from '../scheme';

export const body: AppTheme['body'] = {
    bg: {
        dark: palette.black[0],
        light: palette.white[0],
    },
    width: '100vw',
    height: '100vh',
    index: {
        padding: `${remValue(4)}rem`,
    },
    info: {
        padding: '0',
    },
};
