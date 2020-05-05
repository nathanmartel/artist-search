import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import ArtistContainer from '../../containers/ArtistContainer/ArtistContainer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/:artist' component={ArtistContainer} />
          <Route exact path='/' component={SearchContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
