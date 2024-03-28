import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const Card_ = styled(NavLink)`
    display: flex;
    flex-direction: column-reverse;
    flex: 0;
    position: relative;
    cursor: pointer;
    ${({ theme }) => {
        const { card } = theme.pokemon;
        return css`
            border-radius: ${card.borderRadius};
            @media ${theme.screen.medium} {
                flex: 1;
            }
        `;
    }}
`;
