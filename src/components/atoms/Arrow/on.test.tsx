import '@testing-library/jest-dom';
import { Screen, queries, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeData } from '../../../config/theme/data';
import { defineArrowRotation } from '../../../lib/styling';
import { Arrow } from './index';

type Direction = ComponentPropsWithoutRef<typeof Arrow>;

const buildComponent = (
    direction: Direction['$direction'] = 'top',
    disabled: boolean = false
) => {
    render(
        <ThemeProvider theme={ThemeData}>
            <Arrow $direction={direction} $disabled={disabled} />
        </ThemeProvider>
    );
};
const searchComponent = (
    screen: Screen<typeof queries>,
    typeSearch: 'get' | 'query' = 'get'
) => {
    if (typeSearch === 'get') {
        return screen.getByLabelText('arrow to point', { exact: false });
    }
    return screen.queryByLabelText('arrow to point', { exact: false });
};
const senses: Direction['$direction'][] = ['top', 'right', 'bottom', 'left'];

describe('Arrow Component', () => {
    test('renders correctly', () => {
        buildComponent();
        expect(searchComponent(screen)).toBeVisible();
    });

    test.each(senses)('renders direction correctly', (arg) => {
        buildComponent(arg);
        expect(searchComponent(screen)).toHaveStyleRule(
            'transform',
            defineArrowRotation(arg)
        );
    });
    test('renders disabled colored', () => {
        buildComponent('top', true);
        expect(searchComponent(screen)).toHaveStyleRule(
            'border-color',
            '#7d7d7d'
        );
    });
    test('renders enabled transformed', () => {
        expect(searchComponent(screen, 'query')).not.toHaveStyleRule(
            'border-color',
            '#333'
        );
    });
});
