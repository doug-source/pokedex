import { pokemonDetails } from '../../../config/defaults';
import { usePokemon } from '../../../features/pokemon/selectors';
import { Lines } from '../../atoms/Lines';
import { LinesItem } from '../LinesItem';

type DetailsProps = {
    show?: boolean;
    monster: ReturnType<typeof usePokemon>;
    details: typeof pokemonDetails;
};

export const Details = ({ show = false, monster, details }: DetailsProps) => {
    if (!show || !monster) {
        return null;
    }
    const { dataParsed } = monster;
    if (dataParsed === null) {
        return null;
    }
    return (
        <>
            <Lines>
                {details.map((detail) => (
                    <LinesItem key={detail} label={detail}>
                        {dataParsed[detail]}
                    </LinesItem>
                ))}
            </Lines>
        </>
    );
};
