import React, { Component } from 'react';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-details';
import AddMovie from '../containers/add-movie';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}
