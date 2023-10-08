import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { AdminPage } from '../../pages/AdminPage';
import { MainPage } from '../../pages/MainPage';
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../../constants/routes";

export const AppRouter = () => {
    return <Routes>
        <Route index element={<MainPage/>}/>
        {/* <Route path={LOGIN_ROUTE} element={<LoginPage/>}/> */}
        <Route path={ADMIN_ROUTE} element={<AdminPage />} />
        <Route path="*" element={<Navigate to={MAIN_ROUTE} replace/>}/>
    </Routes>
};