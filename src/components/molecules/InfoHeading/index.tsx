import {
    useMainImgLoadedStatus,
    usePokemon,
} from '../../../features/pokemon/selectors';
import {
    InfoHeadingBox_ as HeadingBox,
    InfoHeadingOne_ as HeadingOne,
    InfoTypeBox_ as TypeBox,
    InfoTypeLabel_ as TypeLabel,
} from './style';

type InfoHeadingProps = {
    pokemonName: string | undefined;
};

export const InfoHeading = ({ pokemonName }: InfoHeadingProps) => {
    const monster = usePokemon();
    const isMainImgLoaded = useMainImgLoadedStatus();
    return (
        <HeadingBox>
            <HeadingOne $loaded={isMainImgLoaded}>{pokemonName}</HeadingOne>
            <TypeBox $loaded={isMainImgLoaded}>
                {monster?.types.map(({ type: { name } }) => (
                    <TypeLabel key={name} $type={name}>
                        {name}
                    </TypeLabel>
                ))}
            </TypeBox>
        </HeadingBox>
    );
};
