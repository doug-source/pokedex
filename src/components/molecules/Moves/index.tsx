import { usePokemon } from '../../../features/pokemon/selectors';
import { useMovesRequest } from '../../../lib/hooks';
import { Lines } from '../../atoms/Lines';
import { LinesItem } from '../LinesItem';
import { MoveType_ } from './style';

type MovesProps = {
    show?: boolean;
    monster: ReturnType<typeof usePokemon>;
};

export const Moves = ({ show = false, monster }: MovesProps) => {
    const [moves] = useMovesRequest(monster);

    if (!show || !moves) {
        return null;
    }
    return (
        <Lines>
            {moves.map((move) => (
                <LinesItem key={move.name} label={move.name}>
                    <MoveType_ $type={move.type} />
                </LinesItem>
            ))}
        </Lines>
    );
};
