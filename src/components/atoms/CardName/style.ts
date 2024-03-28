import { css, styled } from 'styled-components';

export const CardName_ = styled.div`
    flex: 1;
    position: relative;
    ${({ theme }) => {
        const { wide, medium } = theme.screen;
        const { name } = theme.pokemon.card;
        return css`
            font-size: ${name.fontSize};
            padding-left: ${name.padding.inline};
            padding-right: ${name.padding.inline};
            font-weight: ${name.fontWeight};
            top: ${name.position.top};
            text-transform: ${name.textTransform};
            @media ${medium} {
                font-size: ${name.medium.fontSize};
            }
            @media ${wide} {
                font-size: ${name.wide.fontSize};
            }
        `;
    }}
`;
