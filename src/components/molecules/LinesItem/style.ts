import { css, styled } from 'styled-components';

export const LinesItem_ = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

export const LinesItemLabel_ = styled.div`
    ${({ theme }) => {
        const { label } = theme.lines;
        return css`
            text-transform: ${label.textTransform};
        `;
    }}
`;

export const LinesItemData_ = styled.div`
    flex: 1;
    text-align: right;
`;
