import { Sense } from '../types/styled';

export const remValue = (px: number) => {
    return Number((px / 16).toFixed(3));
};

type PosItem = string | number;
type PosData = {
    top: PosItem;
    right: PosItem;
    bottom: PosItem;
    left: PosItem;
};
type BlockPosData = { block: PosItem };
type InlinePosData = { inline: PosItem };

type BlockArgs = BlockPosData & Partial<Pick<PosData, 'left' | 'right'>>;
type InlineArgs = InlinePosData & Partial<Pick<PosData, 'top' | 'bottom'>>;

type MakeLonghandArgs<T> = T extends 'block'
    ? BlockArgs
    : T extends 'inline'
    ? InlineArgs
    : PosData;

export function makeLonghand<T>(props: MakeLonghandArgs<T>): string {
    if ('block' in props && 'inline' in props) {
        return `${props.block} ${props.inline}`;
    }
    if ('block' in props) {
        return `${props.block} ${props.left ?? 'auto'} ${props.block} ${
            props.right ?? 'auto'
        }`;
    }
    if ('inline' in props) {
        return `${props.top ?? 'auto'} ${props.inline} ${
            props.bottom ?? 'auto'
        }`;
    }
    return `${props.top} ${props.right} ${props.bottom} ${props.left}`;
}

export const defineArrowRotation = (sense: Sense) => {
    if (sense === 'right') {
        return 'translate(-25%, 0) rotate(-45deg)';
    }
    if (sense === 'bottom') {
        return 'translate(0, -25%) rotate(45deg)';
    }
    if (sense === 'top') {
        return 'translate(0, 25%) rotate(-135deg)';
    }
    return 'translate(25%, 0) rotate(135deg)';
};
