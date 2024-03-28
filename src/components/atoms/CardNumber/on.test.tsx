import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { CardNumber } from './index';

type Content = ComponentPropsWithoutRef<typeof CardNumber>['children'];

const buildComponent = (children: Content, zeroPadding?: number) => {
    render(
        <ThemeProvider theme={ThemeData}>
            <CardNumber zeroPadding={zeroPadding}>{children}</CardNumber>
        </ThemeProvider>
    );
};
const searchComponent = (text: string, typeSearch: 'get' | 'query' = 'get') => {
    if (typeSearch === 'get') {
        return screen.getByText(text);
    }
    return screen.queryByText(text);
};
describe('CardNumber Component', () => {
    test('renders correctly', () => {
        const val = 1;
        buildComponent(val);
        expect(searchComponent(`#001`)).toBeVisible();
    });
    test('renders with number 123 correctly', () => {
        const val = 123;
        buildComponent(val);
        expect(searchComponent(`#123`)).toHaveTextContent(`#123`);
    });
    test('renders with number 45678 and with 6 digits correctly', () => {
        const val = 45678;
        buildComponent(val, 6);
        expect(searchComponent(`#045678`)).toHaveTextContent(`#045678`);
    });
});
