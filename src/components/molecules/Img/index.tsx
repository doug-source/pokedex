import { ComponentPropsWithoutRef } from 'react';
import { useAppDispatch } from '../../../features/hooks';
import { finishMainImgLoad } from '../../../features/pokemon/pokemons-slice';
import { useMainImgLoadedStatus } from '../../../features/pokemon/selectors';
import { ImgBox_, Img_ } from './style';

type ImgBoxProps_ = Omit<ComponentPropsWithoutRef<typeof ImgBox_>, '$loaded'>;
type ImgProps_ = Omit<ComponentPropsWithoutRef<typeof Img_>, '$loaded'>;
type ImgProps = ImgBoxProps_ &
    ImgProps_ & {
        show?: boolean;
        onLoad?: () => void;
    };

export const Img = (props: ImgProps) => {
    const {
        show = false,
        $padding,
        $minWidth,
        $minWidthMedium,
        $minWidthWide,
        $paddingMedium = $padding,
        onLoad,
        ...remain
    } = props;
    const appDispatch = useAppDispatch();
    const isMainImgLoaded = useMainImgLoadedStatus();

    if (!show) {
        return null;
    }
    return (
        <ImgBox_
            $padding={$padding}
            $minWidth={$minWidth}
            $minWidthMedium={$minWidthMedium}
            $minWidthWide={$minWidthWide}
            $paddingMedium={$paddingMedium}
        >
            <Img_
                {...remain}
                $loaded={isMainImgLoaded}
                onLoad={() => {
                    appDispatch(finishMainImgLoad());
                    onLoad && onLoad();
                }}
            />
        </ImgBox_>
    );
};
