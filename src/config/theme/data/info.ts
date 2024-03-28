import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';
import { AppTheme } from '../scheme';

export const info: AppTheme['info'] = {
    padding: {
        inline: `${remValue(72)}rem`,
        top: `${remValue(24)}rem`,
        bottom: '0',
    },
    minWidth: `${remValue(144)}rem`,
    medium: {
        minWidth: `${remValue(144)}rem`,
    },
    wide: {
        minWidth: `${remValue(144)}rem`,
    },
    back: {
        bg: {
            light: palette.blue[0],
            dark: 'transparent',
        },
        position: {
            top: '0',
            right: '0',
            bottom: '60%',
            left: '0',
        },
        borderRadius: {
            bottom: {
                right: `${remValue(20)}rem`,
                left: `${remValue(20)}rem`,
            },
        },
        zIndex: -1,
    },
    resturnSvg: {
        position: {
            top: `${remValue(16)}rem`,
            right: 'auto',
            bottom: 'auto',
            left: `${remValue(16)}rem`,
        },
        width: `${remValue(48)}rem`,
        height: `${remValue(48)}rem`,
        zIndex: 1,
    },
    headingBox: {
        width: '100%',
        position: {
            top: `${remValue(32)}rem`,
            right: `${remValue(8)}rem`,
            bottom: '0',
            left: `${remValue(8)}rem`,
        },
    },
    headingOne: {
        textTransform: 'uppercase',
        fontSize: `${remValue(20)}rem`,
        fontWeight: '500',
    },
    typeBox: {
        fontSize: `${remValue(12)}rem`,
        fontWeight: '600',
        gap: `${remValue(28)}rem`,
        minWidth: `${remValue(120)}rem`,
    },
    typeLabel: {
        borderRadius: `${remValue(16)}rem`,
        padding: {
            top: `${remValue(5.6)}rem`,
            right: `${remValue(12)}rem`,
            bottom: `${remValue(5.6)}rem`,
            left: `${remValue(12)}rem`,
        },
        before: {
            size: `${remValue(24)}rem`,
            zIndex: 4,
            position: {
                top: '0',
                right: '100%',
                bottom: '0',
                left: 'auto',
            },
            bgSize: `${remValue(24)}rem`,
        },
    },
};
