import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ArtistPage } from '../pages/ArtistPage';
import { MainPage } from '../pages/MainPage';

export const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={MainPage} />
    <Route path='/artists/:artist+' component={ArtistPage} />
  </Switch>
);
