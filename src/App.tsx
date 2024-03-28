import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { navigations } from './config/urls';
import { useAppSelector } from './features/hooks';
import { GlobalStyle } from './global-style';
import { Home } from './pages/Home';
import { Informations } from './pages/Informations';

function App() {
    const { data: theme, themeKey } = useAppSelector((state) => state.theme);
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle $themeKey={themeKey} />
                <Routes>
                    <Route
                        path={navigations.pokemons.index}
                        element={<Home />}
                    />
                    <Route
                        path={navigations.pokemons.show()}
                        element={<Informations />}
                    />
                    <Route path="*" element={<Outlet />} />
                </Routes>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
