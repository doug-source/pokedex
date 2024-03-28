import { ComponentPropsWithoutRef } from 'react';
import { PokeLoader_ } from './style';

type PokeLoaderProps = ComponentPropsWithoutRef<'img'> & {
    $show: ComponentPropsWithoutRef<typeof PokeLoader_>['$show'];
};

export const PokeLoader = ({ $show, ...remain }: PokeLoaderProps) => {
    return (
        <PokeLoader_
            $show={$show}
            {...remain}
            src="/images/pokeball-loader.png"
            alt="pokeball-loader"
        />
    );
};
