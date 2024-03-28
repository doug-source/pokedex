import { css, styled } from 'styled-components';
import { fonts } from '../../../config/theme/fonts';

export const Header_ = styled.header`
    text-align: center;
    @supports (position: sticky) {
        position: sticky;
    }
    @supports not (position: sticky) {
        position: fixed;
    }

    ${({ theme }) => {
        const { header, screen } = theme;
        return css`
            top: ${header.position.top};
            font-family: ${fonts[0]};
            width: ${header.width};
            padding-top: ${header.padding.block};
            padding-bottom: ${header.padding.block};
            font-size: ${header.fontSize};
            color: ${header.color};
            background-color: ${header.bg};
            letter-spacing: ${header.letterSpacing};
            box-shadow: ${header.boxShadow};
            z-index: ${header.zIndex};
            @media ${screen.medium} {
                font-size: ${header.medium.fontSize};
            }
            @media ${screen.wide} {
                text-align: left;
                font-size: ${header.wide.fontSize};
                padding-top: ${header.wide.padding.top};
                padding-right: ${header.wide.padding.right};
                padding-bottom: ${header.wide.padding.bottom};
                padding-left: ${header.wide.padding.left};
            }
        `;
    }}
`;
