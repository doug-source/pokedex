import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';
import { AppTheme } from '../scheme';
import { body } from './body';

export const header: AppTheme['header'] = {
    boxShadow: '0px 6px 8px -4px rgb(0 0 0 / 0.2)',
    fontSize: `${remValue(24)}rem`,
    letterSpacing: `${remValue(3)}rem`,
    padding: {
        block: `${remValue(16)}rem`,
    },
    width: `calc(100vw - 2 * ${body.index.padding})`,
    bg: palette.white[0],
    color: palette.pink[0],
    zIndex: 30,
    position: {
        top: '0',
    },
    wide: {
        fontSize: `${remValue(56)}rem`,
        padding: {
            top: 'auto',
            left: '20%',
            bottom: 'auto',
            right: 'auto',
        },
    },
    medium: {
        fontSize: `${remValue(36)}rem`,
    },
};
