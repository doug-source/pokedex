import { css, styled } from 'styled-components';
import { makeLonghand } from '../../../lib/styling';

export const PokemonTabPanel_ = styled.div`
    ${({ theme }) => {
        const { padding } = theme.tabPanel;
        return css`
            padding: ${makeLonghand(padding)};
        `;
    }}
`;
