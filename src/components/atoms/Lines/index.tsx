import { ReactNode } from 'react';
import { useMainImgLoadedStatus } from '../../../features/pokemon/selectors';
import { Lines_ } from './style';

type LinesProps = {
    children: ReactNode;
};

export const Lines = ({ children }: LinesProps) => {
    const isMainImgLoaded = useMainImgLoadedStatus();
    return <Lines_ $loaded={isMainImgLoaded}>{children}</Lines_>;
};
