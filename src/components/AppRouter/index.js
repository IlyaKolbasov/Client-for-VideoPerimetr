import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { AdminPage } from '../../pages/AdminPage';
import { AdminPage2 } from '../../pages/AdminPage2';
import { MainPage } from '../../pages/MainPage';
import {ADMIN_ROUTE, ADMIN_ROUTE_2, LOGIN_ROUTE, MAIN_ROUTE} from "../../constants/routes";

export const AppRouter = () => {
    return <Routes>
        <Route index element={<MainPage/>}/>
        {/* <Route path={LOGIN_ROUTE} element={<LoginPage/>}/> */}
        <Route path={ADMIN_ROUTE} element={<AdminPage />} />
        <Route path={ADMIN_ROUTE_2} element={<AdminPage2 />} />
        <Route path="*" element={<Navigate to={MAIN_ROUTE} replace/>}/>
    </Routes>
};