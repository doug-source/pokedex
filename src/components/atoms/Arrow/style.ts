import { css, styled } from 'styled-components';
import { palette } from '../../../config/color/palette';
import { defineArrowRotation } from '../../../lib/styling';
import { Sense } from '../../../types/styled';

type ArrowProps = {
    $direction: Sense;
    $disabled?: boolean;
};

export const Arrow_ = styled.div<ArrowProps>`
    cursor: pointer;
    border-style: solid;
    transition: transform 0.15s;
    ${({ theme, $direction, $disabled = false }) => {
        const { arrow } = theme;
        const sense = defineArrowRotation($direction);
        return css`
            width: ${arrow.size};
            height: ${arrow.size};
            border-width: ${arrow.borderWidth};
            border-color: ${arrow.borderColor};
            border-left: ${arrow.borderLeft};
            border-top: ${arrow.borderTop};

            transform: ${sense};
            &:active {
                transform: ${sense} scale(0.8);
            }
            ${$disabled &&
            css`
                border-color: ${palette.gray[2]};
            `}
        `;
    }}
`;
