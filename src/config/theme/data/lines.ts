import { remValue } from '../../../lib/styling';
import { AppTheme } from '../scheme';

export const lines: AppTheme['lines'] = {
    label: {
        textTransform: 'capitalize',
        width: `${remValue(200)}rem`,
    },
    width: '100%',
    gap: `${remValue(24)}rem`,
};
