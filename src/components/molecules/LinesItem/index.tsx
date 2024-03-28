import { ReactNode } from 'react';
import {
    LinesItemData_ as Data_,
    LinesItem_ as Item_,
    LinesItemLabel_ as Label_,
} from './style';

type LinesItemProps = {
    label: ReactNode;
    children?: ReactNode;
    className?: string;
};

export const LinesItem = ({ label, children, className }: LinesItemProps) => {
    return (
        <Item_ className={className}>
            <Label_>{label}</Label_>
            <Data_>{children}</Data_>
        </Item_>
    );
};
