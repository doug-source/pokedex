import '@testing-library/jest-dom';
import { Screen, queries, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { CardBack } from './index';

const mockStore = configureStore([]);

const buildComponent = (themeData: typeof ThemeData = ThemeData) => {
    const store = mockStore({
        theme: {
            themeKey: 'light',
        },
    });
    render(
        <Provider store={store}>
            <ThemeProvider theme={themeData}>
                <CardBack />
            </ThemeProvider>
        </Provider>
    );
};
const searchComponent = (
    screen: Screen<typeof queries>,
    typeSearch: 'get' | 'query' = 'get'
) => {
    if (typeSearch === 'get') {
        return screen.getByTestId('back-card');
    }
    return screen.queryByTestId('back-card');
};

describe('CardBack Component', () => {
    test('renders correctly', () => {
        buildComponent();
        expect(searchComponent(screen)).toBeVisible();
    });
});
