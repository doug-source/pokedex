import { css, styled } from 'styled-components';

export const Stretcher_ = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => {
        const { stretcher, screen } = theme;
        return css`
            padding-left: ${stretcher.padding.inline};
            padding-right: ${stretcher.padding.inline};
            top: ${stretcher.position.top};
            right: ${stretcher.position.right};
            bottom: ${stretcher.position.bottom};
            left: ${stretcher.position.left};

            @media ${screen.wide} {
                width: 50%;
                left: auto;
                padding-right: 30%;
            }
        `;
    }}
`;
