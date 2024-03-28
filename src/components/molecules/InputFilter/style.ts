import { css, styled } from 'styled-components';
import Finder from '../../../assets/finder.svg?react';
import { fonts } from '../../../config/theme/fonts';
import { makeLonghand } from '../../../lib/styling';

export const InputFilterBox_ = styled.div`
    position: relative;
    ${({ theme }) => {
        const { inputFilter } = theme;
        return css`
            top: ${inputFilter.position.top};
            right: ${inputFilter.position.right};
            bottom: ${inputFilter.position.bottom};
            left: ${inputFilter.position.left};
            width: ${inputFilter.width};
            z-index: ${inputFilter.zIndex};
        `;
    }}
`;

export const InputFilter_ = styled.input`
    font-family: ${fonts[2]};
    ${({ theme }) => {
        const { input } = theme.inputFilter;
        const padding = makeLonghand(input.padding);
        return css`
            border-radius: ${input.borderRadius};
            border-width: ${input.borderWidth};
            border-style: solid;
            border-color: ${input.borderColor};
            padding: ${padding};
            text-indent: ${input.textIndent};
            width: ${input.width};
            outline: ${input.outline};
        `;
    }}
`;

export const InputFilterSvg_ = styled(Finder)`
    position: absolute;
    cursor: pointer;
    margin: auto;
    ${({ theme }) => {
        const { icon } = theme.inputFilter;
        return css`
            top: ${icon.position.top};
            right: ${icon.position.right};
            bottom: ${icon.position.bottom};
            left: ${icon.position.left};
            width: ${icon.width};

            & path {
                fill: ${icon.path.fill};
            }
        `;
    }}
`;
