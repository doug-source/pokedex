import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { Header } from './index';

const buildComponent = () => {
    render(
        <ThemeProvider theme={ThemeData}>
            <Header />
        </ThemeProvider>
    );
};

describe('Header Component', () => {
    test('renders correctly', () => {
        buildComponent();
        expect(screen.getByText('Pokedex')).toBeVisible();
    });
});
