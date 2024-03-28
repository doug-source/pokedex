import { DefaultTheme } from 'styled-components';
import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';

const inputFilterPos = {
    top: `${remValue(20)}rem`,
    right: 'auto',
    bottom: 'auto',
    left: `${remValue(4)}rem`,
};

export const inputFilter: DefaultTheme['inputFilter'] = {
    position: inputFilterPos,
    width: `calc(100% - 2 * ${inputFilterPos.left})`,
    zIndex: 1,
    input: {
        borderRadius: `${remValue(8)}rem`,
        borderWidth: `${remValue(1)}rem`,
        borderColor: `${palette.gray[1]}`,
        padding: {
            top: `${remValue(8)}rem`,
            right: `${remValue(12)}rem`,
            bottom: `${remValue(8)}rem`,
            left: `${remValue(16)}rem`,
        },
        textIndent: `${remValue(8)}rem`,
        width: '100%',
        outline: '0',
    },
    icon: {
        position: {
            top: '0',
            right: 'auto',
            bottom: '0',
            left: `${remValue(5.6)}rem`,
        },
        width: `${remValue(16)}rem`,
        path: {
            fill: `${palette.gray[1]}`,
        },
    },
};
