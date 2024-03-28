import { css, styled } from 'styled-components';
import { PokemonTypes } from '../../../types/pokemon';

export const MoveType_ = styled.div<{ $type: PokemonTypes }>`
    position: relative;
    left: 100%;

    &::before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;

        ${({ theme, $type }) => {
            const { before } = theme.info.typeLabel;
            return css`
                background-image: url(images/${$type}.png);
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
