import styled, { css } from 'styled-components';
import { fonts } from '../../../config/theme/fonts';
import { makeLonghand } from '../../../lib/styling';

export const TabList_ = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ${({ theme }) => {
        const { tabList } = theme;
        const { after } = tabList;
        return css`
            padding: ${makeLonghand(tabList.padding)};
            &::after {
                position: absolute;
                content: '';
                left: ${after.position.left};
                right: ${after.position.right};
                bottom: ${after.position.bottom};
                top: ${after.position.top};
                height: ${after.height};
                background-color: ${after.bg};
                z-index: ${after.zIndex};
            }
        `;
    }}
`;

export const TabListBtn_ = styled.button`
    appearance: none;
    border: 0;
    background-color: transparent;
    font-family: ${fonts[2]};
    cursor: pointer;
    ${({ theme }) => {
        const { btn } = theme.tabList;
        return css`
            font-size: ${btn.fontSize};
            padding: ${makeLonghand(btn.padding)};
        `;
    }}
`;

export const TabListBtnText_ = styled.span<{ $selected: boolean }>`
    ${({ theme, $selected = true }) => {
        const { btnText } = theme.tabList;
        return css`
            border-bottom-color: ${$selected
                ? btnText.borderBottom.color
                : 'transparent'};
            font-weight: ${$selected ? btnText.fontWeight : 'normal'};

            border-bottom-width: ${btnText.borderBottom.width};
            border-bottom-style: solid;
            padding: ${makeLonghand(btnText.padding)};
            text-transform: ${btnText.textTransform};
        `;
    }}
`;
