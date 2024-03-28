import { css, styled } from 'styled-components';

export const CardNumber_ = styled.div`
    flex: 1;
    position: relative;
    ${({ theme }) => {
        const { wide: wideScreen, medium: mediumScreen } = theme.screen;
        const { fontSize, padding, top, medium, wide } =
            theme.pokemon.card.number;
        return css`
            font-size: ${fontSize};
            padding-left: ${padding.inline};
            padding-right: ${padding.inline};
            top: ${top};
            @media ${mediumScreen} {
                font-size: ${medium.fontSize};
            }
            @media ${wideScreen} {
                font-size: ${wide.fontSize};
            }
        `;
    }}
`;
