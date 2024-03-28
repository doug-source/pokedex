import { css, styled } from 'styled-components';
import { fonts } from '../../../config/theme/fonts';

export const List_ = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    align-content: flex-start;
    font-family: ${fonts[1]};
    padding-bottom: 2rem;

    ${({ theme }) => {
        const { medium, wide } = theme.list;
        return css`
            @media ${theme.screen.medium} {
                margin: auto;
                max-width: ${medium.maxWidth};
                gap: ${medium.gap};
                align-content: space-around;
            }
            @media ${theme.screen.wide} {
                margin: auto;
                max-width: ${wide.maxWidth};
                gap: ${wide.gap};
                align-content: space-around;
            }
        `;
    }}
`;

export const Overlay_ = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 35;
    cursor: pointer;
`;
