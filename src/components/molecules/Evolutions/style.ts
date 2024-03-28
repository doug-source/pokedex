import styled, { css } from 'styled-components';

export const EvolutionBox_ = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${({ theme }) => {
        const { wide } = theme.screen;
        return css`
            @media ${wide} {
                justify-content: center;
            }
        `;
    }}
`;
