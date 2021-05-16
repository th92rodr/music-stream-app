import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';

export const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={MainPage} />
  </Switch>
);
