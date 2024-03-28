import { DefaultTheme } from 'styled-components';
import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';

const imgBox: DefaultTheme['pokemon']['card']['imgBox'] = {
    padding: {
        inline: `${remValue(24)}rem`,
        top: `${remValue(24)}rem`,
        bottom: '0',
    },
    minWidth: `${remValue(144)}rem`,
    medium: {
        minWidth: `${remValue(178)}rem`,
        padding: {
            inline: `${remValue(8)}rem`,
            top: `${remValue(24)}rem`,
            bottom: '0',
        },
    },
    wide: {
        minWidth: `${remValue(212)}rem`,
    },
};

export const pokemon: DefaultTheme['pokemon'] = {
    card: {
        borderRadius: `${remValue(8)}rem`,
        imgBox,
        number: {
            fontSize: '65%',
            top: `-${remValue(8)}rem`,
            padding: {
                inline: `calc(${imgBox.padding.inline} / 2)`,
            },
            medium: {
                fontSize: '80%',
            },
            wide: {
                fontSize: '80%',
            },
        },
        name: {
            fontSize: `${remValue(12)}rem`,
            fontWeight: 600,
            position: {
                top: `-${remValue(8)}rem`,
            },
            padding: {
                inline: `calc(${imgBox.padding.inline} / 2)`,
            },
            medium: {
                fontSize: '100%',
            },
            wide: {
                fontSize: '100%',
            },
            textTransform: 'capitalize',
        },
        back: {
            position: {
                top: '40%',
                left: '0',
                bottom: '0',
                right: '0',
            },
            borderRadius: `${remValue(8)}rem`,
            bg: {
                dark: '',
                light: palette.blue[0],
            },
            zIndex: -1,
        },
    },
};
