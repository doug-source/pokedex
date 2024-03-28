import { remValue } from '../../../lib/styling';
import { AppTheme } from '../scheme';

export const tabPanel: AppTheme['tabPanel'] = {
    padding: {
        top: `${remValue(16)}rem`,
        right: `${remValue(16)}rem`,
        bottom: `${remValue(16)}rem`,
        left: `${remValue(16)}rem`,
    },
};
