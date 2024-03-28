import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { Img } from './index';

const mockStore = configureStore([]);

const buildComponent = () => {
    const store = mockStore({
        pokemons: {
            mainImgLoaded: true,
        },
    });
    render(
        <Provider store={store}>
            <ThemeProvider theme={ThemeData}>
                <Img
                    show
                    $minWidth="100px"
                    $minWidthMedium="100px"
                    $minWidthWide="100px"
                    $padding="0 0 0 0"
                    alt="image from something"
                />
            </ThemeProvider>
        </Provider>
    );
};

describe('Header Component', () => {
    test('renders correctly', () => {
        buildComponent();
        expect(screen.getByAltText('image from something')).toBeVisible();
    });
});
