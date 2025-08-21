// THIS ENTIRE FILE HANDLES ALL ROUTING

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ButtonsPage } from './pages/ButtonsPage';
import { FormsPage } from './pages/FormsPage';
import { DataTablesPage } from './pages/DataTablesPage';
import { GraphsPage } from './pages/GraphsPage';
import { BasicNavBar } from './components/Navigation/NavigationBar';

export function Router() {
  return <RouterProvider router={router} />;
}


const router = createBrowserRouter([
  // i have no idea why i need basicnavbar here but meh
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


