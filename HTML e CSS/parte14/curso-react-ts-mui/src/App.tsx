import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { AppRoutes } from './routes';
import MenuLateral from './shared/components/menu-lateral/MenuLateral';
import { AppDrawerProvider } from './shared/contexts';

export default function App() {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
}
