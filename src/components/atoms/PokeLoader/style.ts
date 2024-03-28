import { keyframes, styled } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const PokeLoader_ = styled.img<{ $show?: boolean }>`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 250px;
    height: 250px;
    z-index: 40;
    animation: ${rotate} 0.8s linear 0s infinite;
    display: ${({ $show = false }) => ($show ? 'block' : 'none')};
`;
