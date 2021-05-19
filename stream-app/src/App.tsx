import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import './styles/global.scss';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
