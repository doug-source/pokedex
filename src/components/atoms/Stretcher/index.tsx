import { ReactNode } from 'react';
import { Stretcher_ } from './style';

type StretcherProps = {
    children: ReactNode;
};

export const Stretcher = ({ children }: StretcherProps) => {
    return <Stretcher_>{children}</Stretcher_>;
};
