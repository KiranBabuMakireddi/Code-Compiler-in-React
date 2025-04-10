import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routes/routes';
import { SettingsProvider } from './context/SettingsContext'; 
import './index.css';

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider> 
      <RouterProvider router={router} />
    </SettingsProvider>
  </React.StrictMode>
);
