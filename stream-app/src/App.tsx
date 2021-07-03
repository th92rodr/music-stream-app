import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider, PlayerContextProvider } from './contexts';
import { Routes } from './routes';

import './styles/global.scss';

export const App: React.FC = () => (
  <PlayerContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContextProvider>
  </PlayerContextProvider>
);
