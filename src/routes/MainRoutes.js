import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// dashboard routing
const CommCodes = Loadable(lazy(() => import('views/system/CommCodes')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <CommCodes />
        }
    ]
};

export default MainRoutes;
