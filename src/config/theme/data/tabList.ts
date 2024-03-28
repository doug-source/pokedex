import { remValue } from '../../../lib/styling';
import { palette } from '../../color/palette';
import { AppTheme } from '../scheme';

const tabListPadding = {
    top: `${remValue(16)}rem`,
    right: `${remValue(8)}rem`,
    bottom: `${remValue(16)}rem`,
    left: `${remValue(8)}rem`,
};

const tabListBtn = {
    fontSize: `${remValue(13.6)}rem`,
    padding: {
        top: `${remValue(1)}rem`,
        right: `${remValue(4)}rem`,
        bottom: `${remValue(1)}rem`,
        left: `${remValue(4)}rem`,
    },
};

const tabListBtnText = {
    borderBottom: {
        width: `${remValue(4)}rem`,
        color: palette.black[1],
    },
    padding: {
        top: `${remValue(4)}rem`,
        right: `${remValue(12)}rem`,
        bottom: `${remValue(4)}rem`,
        left: `${remValue(12)}rem`,
    },
    fontWeight: '700',
    textTransform: 'capitalize' as const,
};

const afterHeightTabList = `${remValue(2)}rem`;

export const tabList: AppTheme['tabList'] = {
    btnText: tabListBtnText,
    btn: tabListBtn,
    padding: tabListPadding,
    after: {
        position: {
            left: `calc(${tabListPadding.left} + ${tabListBtn.padding.left})`,
            right: `calc(${tabListPadding.right} + ${tabListBtn.padding.right})`,
            bottom: `calc(${tabListPadding.bottom} - ${tabListBtnText.padding.bottom} - ${afterHeightTabList})`,
            top: `auto`,
        },
        height: afterHeightTabList,
        bg: palette.gray[1],
        zIndex: -1,
    },
};
