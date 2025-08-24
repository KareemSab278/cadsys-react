// THIS ENTIRE FILE HANDLES ALL ROUTING

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/components/HomePage';
import { ButtonsPage } from './pages/components/ButtonsPage';
import { FormsPage } from './pages/components/FormsPage';
import { DataTablesPage } from './pages/components/DataTablesPage';
import { GraphsPage } from './pages/components/GraphsPage';
import { BasicNavBar } from './components/Navigation/NavigationBar';

export function Router() {
  return <RouterProvider router={router} />;
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <><BasicNavBar /><HomePage /></>,
  },
  {
    path: '/buttons',
    element: <><BasicNavBar /><ButtonsPage /></>,
  },
  {
    path: '/forms',
    element: <><BasicNavBar /><FormsPage /></>,
  },
  {
    path: '/tables',
    element: <><BasicNavBar /><DataTablesPage /></>,
  },
  {
    path: '/graphs',
    element: <><BasicNavBar /><GraphsPage /></>,
  },
]);


