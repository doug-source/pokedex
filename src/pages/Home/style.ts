import { css, styled } from 'styled-components';
import { InputFilter } from '../../components/molecules/InputFilter';

export const InputFilterHome_ = styled(InputFilter)`
    @supports not (position: sticky) {
        ${({ theme }) => {
            return css`
                margin-top: ${theme.home.inputFilter.marginTop};
            `;
        }}
    }
`;
