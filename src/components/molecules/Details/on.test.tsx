import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { PokemonData } from '../../../types/api/pokemon';
import { Details } from './index';

function makePokemnoData() {
    return {
        dataParsed: {
            height: '20',
            weight: '40',
            abilities: ['run'],
        },
    } as unknown as PokemonData;
}
const mockStore = configureStore([]);

const buildComponent = (monster: PokemonData) => {
    const store = mockStore({
        pokemons: {
            mainImgLoaded: true,
        },
    });
    render(
        <Provider store={store}>
            <ThemeProvider theme={ThemeData}>
                <Details
                    show
                    details={['height', 'weight', 'abilities']}
                    monster={monster}
                />
            </ThemeProvider>
        </Provider>
    );
};

describe('Details Component', () => {
    test('renders correctly', () => {
        const monster = makePokemnoData();
        buildComponent(monster);
        expect(screen.getByText('height')).toBeVisible();
        expect(screen.getByText('weight')).toBeVisible();
        expect(screen.getByText('abilities')).toBeVisible();
        expect(screen.getByText(monster.dataParsed.height)).toBeVisible();
        expect(screen.getByText(monster.dataParsed.weight)).toBeVisible();
    });
});
