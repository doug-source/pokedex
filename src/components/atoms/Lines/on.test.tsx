import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { Lines } from './index';

type Content = ComponentPropsWithoutRef<typeof Lines>['children'];

const mockStore = configureStore([]);

const buildComponent = (children: Content, loaded = false) => {
    const store = mockStore({
        pokemons: {
            mainImgLoaded: loaded,
        },
    });
    render(
        <Provider store={store}>
            <ThemeProvider theme={ThemeData}>
                <Lines>{children}</Lines>
            </ThemeProvider>
        </Provider>
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
describe('Lines Component', () => {
    test('renders correctly', () => {
        const text = 'anyway';
        buildComponent(text, true);
        expect(searchComponent(text)).toBeVisible();
    });
    test('do not render correctly', () => {
        const text = 'anyway';
        buildComponent(text);
        expect(searchComponent(text, 'query')).not.toBeVisible();
    });
    test('renders with the text passed to it', () => {
        const text = 'anything';
        buildComponent(text, true);
        expect(searchComponent(text)).toHaveTextContent(text);
    });
    test('renders with opacity 0', () => {
        const text = 'anything';
        buildComponent(text);
        expect(searchComponent(text)).toHaveStyleRule('opacity', '0');
    });
    test('renders with opacity 1', () => {
        const text = 'anything';
        buildComponent(text, true);
        expect(searchComponent(text)).not.toHaveStyleRule('opacity', '0');
    });
});
