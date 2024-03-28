import { usePokemonStats } from '../../../features/pokemon/selectors';
import { Lines } from '../../atoms/Lines';
import { LinesItem } from '../LinesItem';

type StatsProps = {
    show?: boolean;
};

export const Stats = ({ show = false }: StatsProps) => {
    const stats = usePokemonStats();
    if (!show || !stats) {
        return null;
    }
    return (
        <Lines>
            {stats.map(([name, val]) => (
                <LinesItem key={name} label={name}>
                    {val}
                </LinesItem>
            ))}
        </Lines>
    );
};
