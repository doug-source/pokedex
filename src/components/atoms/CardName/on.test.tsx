import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { CardName } from './index';

type Content = ComponentPropsWithoutRef<typeof CardName>['children'];

const buildComponent = (children: Content) => {
    render(
        <ThemeProvider theme={ThemeData}>
            <CardName>{children}</CardName>
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
describe('CardName Component', () => {
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
