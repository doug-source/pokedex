import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';
import Back from '../../assets/back.svg?react';
import { fonts } from '../../config/theme/fonts';
import { Loaded, ThemeKey } from '../../types/styled';

export const PokemonInfo_ = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${fonts[1]};
`;

type BackProps_ = Loaded & {
    $type?: string;
    $themeKey: ThemeKey;
};

export const PokemonInfoBack_ = styled.div<BackProps_>`
    position: absolute;

    ${({ theme, $themeKey }) => {
        const { back } = theme.info;
        return css`
            background-color: ${back.bg[$themeKey]};
            top: ${back.position.top};
            bottom: ${back.position.bottom};
            left: ${back.position.left};
            right: ${back.position.right};
            border-bottom-right-radius: ${back.borderRadius.bottom.right};
            border-bottom-left-radius: ${back.borderRadius.bottom.left};
            z-index: ${back.zIndex};
        `;
    }}

    transition: 0.2s transform;
    transform: ${({ $loaded }) => {
        return css`
            ${$loaded ? 'scale(1)' : 'scale(0)'}
        `;
    }};
`;

export const PokemonInfoReturnLink_ = styled(NavLink)`
    &:active svg {
        transition: 0.1s transform;
        transform: scale(0.8);
    }
`;

export const PokemonInfoResturnSvg_ = styled(Back)`
    position: absolute;
    cursor: pointer;
    ${({ theme }) => {
        const { resturnSvg } = theme.info;
        return css`
            top: ${resturnSvg.position.top};
            bottom: ${resturnSvg.position.bottom};
            right: ${resturnSvg.position.right};
            left: ${resturnSvg.position.left};
            width: ${resturnSvg.width};
            height: ${resturnSvg.height};
            z-index: ${resturnSvg.zIndex};
        `;
    }}

    > g {
        circle {
            fill: #383838;
        }
        path {
            fill: #fff;
            transform: matrix(
                0.42235744,
                0,
                0,
                0.42235744,
                53.238146,
                43.461226
            );
        }
    }
`;
