import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { Evolutions } from './index';

const mockStore = configureStore([]);

describe('Evolutions Component', () => {
    const store = mockStore({
        pokemons: {
            mainImgLoaded: true,
        },
    });
    render(
        <Provider store={store}>
            <ThemeProvider theme={ThemeData}>
                <Evolutions monster={null} />
            </ThemeProvider>
        </Provider>
    );
    test.todo('renders correctly');
});
