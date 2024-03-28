import { useThemeKey } from '../../../features/theme/selectors';
import { CardBack_ } from './style';

export const CardBack = () => {
    const themeKey = useThemeKey();
    return <CardBack_ $themeKey={themeKey} data-testid="back-card" />;
};
