import { css, styled } from 'styled-components';
import { Loaded } from '../../../types/styled';

export const PokemonTabs_ = styled.div<Loaded>`
    transition: opacity 0.2s;
    opacity: ${({ $loaded }) => {
        return css`
            ${$loaded ? '1' : '0'}
        `;
    }};
    ${({ theme }) => {
        const { wide } = theme.screen;
        return css`
            @media ${wide} {
                width: 80vw;
            }
        `;
    }}
`;

export const PokemonTabsTitle_ = styled.h3`
    display: none;
`;
