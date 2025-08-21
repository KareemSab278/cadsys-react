import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ButtonsPage } from './pages/ButtonsPage';
import { FormsPage } from './pages/FormsPage';
import { DataTablesPage } from './pages/DataTablesPage';
import { GraphsPage } from './pages/GraphsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/buttons',
    element: <ButtonsPage />,
  },
  {
    path: '/forms',
    element: <FormsPage />,
  },
  {
    path: '/tables',
    element: <DataTablesPage />,
  },
  {
    path: '/graphs',
    element: <GraphsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
