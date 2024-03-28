import { css, styled } from 'styled-components';
import { ThemeKey } from '../../../types/styled';

export const CardBack_ = styled.div<{ $themeKey: ThemeKey }>`
    position: absolute;
    ${({ theme, $themeKey }) => {
        const { bg, borderRadius, position, zIndex } = theme.pokemon.card.back;
        return css`
            z-index: ${zIndex};
            background-color: ${bg[$themeKey]};
            bottom: ${position.bottom};
            left: ${position.left};
            right: ${position.right};
            top: ${position.top};
            border-radius: ${borderRadius};
        `;
    }}
`;
