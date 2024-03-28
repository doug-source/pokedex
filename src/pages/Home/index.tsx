import { Header } from '../../components/molecules/Header';
import { List } from '../../components/molecules/List';
import { GlobalStyleIndex } from '../../global-style';
import { InputFilterHome_ } from './style';

export const Home = () => {
    return (
        <>
            <GlobalStyleIndex />
            <Header />
            <InputFilterHome_ />
            <List />
        </>
    );
};
