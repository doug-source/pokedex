import { css, styled } from 'styled-components';
import { colorTypes } from '../../../config/color/defaults';
import { makeLonghand } from '../../../lib/styling';
import { PokemonTypes } from '../../../types/pokemon';
import { Loaded } from '../../../types/styled';

export const InfoHeadingBox_ = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => {
        const { headingBox } = theme.info;
        const { wide } = theme.screen;
        return css`
            width: ${headingBox.width};
            padding: ${makeLonghand(headingBox.position)};

            @media ${wide} {
                width: 80vw;
            }
        `;
    }}
`;

export const InfoHeadingOne_ = styled.h1<Loaded>`
    position: relative;
    display: inline-block;
    ${({ theme }) => {
        const { headingOne } = theme.info;
        return css`
            text-transform: ${headingOne.textTransform};
            font-size: ${headingOne.fontSize};
            font-weight: ${headingOne.fontWeight};
        `;
    }}

    transition: right 0.2s;
    right: ${({ $loaded }) => {
        return css`
            ${$loaded ? '0' : '100%'}
        `;
    }};
`;

export const InfoTypeBox_ = styled.div<Loaded>`
    justify-content: flex-end;
    position: relative;
    display: flex;
    ${({ theme }) => {
        const { typeBox } = theme.info;
        return css`
            font-size: ${typeBox.fontSize};
            font-weight: ${typeBox.fontWeight};
            gap: ${typeBox.gap};
            min-width: ${typeBox.minWidth};
        `;
    }}

    transition: left 0.2s;
    left: ${({ $loaded }) => {
        return css`
            ${$loaded ? '0' : '100%'}
        `;
    }};
`;

export const InfoTypeLabel_ = styled.div<{ $type: PokemonTypes }>`
    ${({ $type }) => {
        return css`
            text-transform: capitalize;
            position: relative;
            background-color: ${colorTypes.label[$type]};
            ${({ theme }) => {
                const { typeLabel } = theme.info;
                return css`
                    border-radius: ${typeLabel.borderRadius};
                    padding: ${makeLonghand(typeLabel.padding)};
                `;
            }}

            &::before {
                content: '';
                position: absolute;
                background-image: url(images/${$type}.png);
                background-repeat: no-repeat;
                background-position: center;
                ${({ theme }) => {
                    const { before } = theme.info.typeLabel;
                    return css`
                        background-size: ${before.bgSize};
                        width: ${before.size};
                        height: ${before.size};
                        z-index: ${before.zIndex};
                        left: ${before.position.left};
                        right: ${before.position.right};
                        top: ${before.position.top};
                        bottom: ${before.position.bottom};
                    `;
                }}
            }
        `;
    }}
`;
