import { css, styled } from 'styled-components';
import { Loaded } from '../../../types/styled';

export const Lines_ = styled.div<Loaded>`
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: center;
    align-content: flex-start;
    transition: opacity 0.4s;
    ${({ theme, $loaded }) => {
        return css`
            width: ${theme.lines.width};
            gap: ${theme.lines.gap};

            opacity: ${$loaded ? '1' : '0'};
        `;
    }}
`;
