import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom'; // <-- Add this import
import { Router } from './Router';
import { theme } from './theme';
import { HomePage } from './pages/HomePage';
import { BasicNavBar } from './components/Navigation/NavigationBar';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BasicNavBar /> {/* leave this here so it appears on every single page */}
      <Router />
      {/* All routing inside of the Router component */}
    </MantineProvider>
  );
}
