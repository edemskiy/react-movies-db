import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import Movie from '../components/Movie/Movie';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SearchBar} />
      <Route path="/movies/:movieID" component={Movie} />
    </Switch>
  );
}

export default Routes;
