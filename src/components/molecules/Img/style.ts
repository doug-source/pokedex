import { css, styled } from 'styled-components';
import { Loaded } from '../../../types/styled';

export const Img_ = styled.img<Loaded>`
    object-fit: contain;
    transition-property: opacity;
    transition-duration: 0.4s;
    opacity: ${({ $loaded }) => ($loaded ? '1' : '0')};
`;

type ImgBoxProps = {
    $padding: string;
    $minWidth: string;
    $minWidthMedium: string;
    $minWidthWide: string;
    $paddingMedium?: string;
};

export const ImgBox_ = styled.div<ImgBoxProps>`
    align-self: center;
    ${({
        theme,
        $padding,
        $minWidth,
        $minWidthMedium,
        $minWidthWide,
        $paddingMedium = $padding,
    }) => {
        const { medium, wide } = theme.screen;
        return css`
            padding: ${$padding};
            min-width: ${$minWidth};

            @media ${medium} {
                min-width: ${$minWidthMedium};
                padding: ${$paddingMedium};
            }
            @media ${wide} {
                min-width: ${$minWidthWide};
            }
        `;
    }}
`;
