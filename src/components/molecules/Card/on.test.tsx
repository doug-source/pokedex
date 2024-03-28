import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { Card } from './index';

const srcUrl = 'http://localhost:8000';

const buildComponent = () => {
    render(
        <ThemeProvider theme={ThemeData}>
            <Card id={1} name="Test" srcUrl={srcUrl} />
        </ThemeProvider>
    );
};

describe('Card Component', () => {
    test('renders correctly', () => {
        buildComponent();
    });
});
