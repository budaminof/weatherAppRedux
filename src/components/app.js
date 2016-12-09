import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/Weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Five Day Forecast</h1>
        <SearchBar />
        <WeatherList />
      </div>

    );
  }
}
