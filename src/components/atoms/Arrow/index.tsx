import { ComponentPropsWithoutRef } from 'react';
import { Arrow_ } from './style';

type ArrowProps = ComponentPropsWithoutRef<typeof Arrow_>;

export const Arrow = (props: ArrowProps) => {
    return (
        <Arrow_
            {...props}
            aria-label="arrow to point to top, right, bottom or left"
        />
    );
};
