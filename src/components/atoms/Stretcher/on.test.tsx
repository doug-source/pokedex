import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { Stretcher } from './index';

type Content = ComponentPropsWithoutRef<typeof Stretcher>['children'];

const buildComponent = (children: Content) => {
    render(
        <ThemeProvider theme={ThemeData}>
            <Stretcher>{children}</Stretcher>
        </ThemeProvider>
    );
};
const searchComponent = (
    children: string,
    typeSearch: 'get' | 'query' = 'get'
) => {
    if (typeSearch === 'get') {
        return screen.getByText(children);
    }
    return screen.queryByText(children);
};
describe('Stretcher Component', () => {
    test('renders correctly', () => {
        const text = 'anyway';
        buildComponent(text);
        expect(searchComponent(text)).toBeVisible();
    });
    test('renders with the text passed to it', () => {
        const text = 'anything';
        buildComponent(text);
        expect(searchComponent(text)).toHaveTextContent(text);
    });
});
