
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <>
            <Outlet></Outlet>
            <Header></Header>
        </>
    );
};

export default Main;