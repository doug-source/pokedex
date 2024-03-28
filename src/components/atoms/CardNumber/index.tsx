import { CardNumber_ } from './style';

type CardNumberProps = {
    children: number;
    zeroPadding?: number;
};

export const CardNumber = ({ children, zeroPadding = 3 }: CardNumberProps) => {
    return (
        <CardNumber_>
            #{String(children).padStart(zeroPadding, '0')}
        </CardNumber_>
    );
};
