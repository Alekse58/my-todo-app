import {createBrowserRouter} from 'react-router-dom';
import Login from '@/pages/LoginPage.tsx';
import MainPage from "@/pages/MainPage.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/login',
        element: <Login/>,
    },
]);

export default router;
