import { ReactNode } from 'react';
import { CardName_ } from './style';

type CardNameProps = {
    children: ReactNode;
};

export const CardName = ({ children }: CardNameProps) => {
    return <CardName_>{children}</CardName_>;
};
