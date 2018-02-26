import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import Movie from '../components/Movie/Movie';
import Header from '../components/Header/Header';

const App = () =>
  (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/movies/:movieID" component={Movie} />
      </Switch>
    </div>
  );

export default App;
