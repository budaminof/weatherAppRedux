import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import tuc from 'temp-units-conv';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => tuc.k2f(weather.main.temp));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humdities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord; // !!! so cool !!!

      return (
        <tr key={ id }>
          <td><GoogleMap lon={ lon } lat={ lat } /></td>
          <td><Chart data={ temps } color="orange" units='&deg;F'/></td>
          <td><Chart data={ humdities } color="blue" units='%'/></td>
          <td><Chart data={ pressures } color="green" units='hPa'/></td>
        </tr>
      );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapSteteToProps({ weather }) {
  return { weather }; //  { weather: weather }
}

export default connect(mapSteteToProps)(WeatherList);
