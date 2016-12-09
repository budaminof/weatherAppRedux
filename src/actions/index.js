//for making AJAX request
import axios from 'axios';
const API_KEY = '580a56d51527aaab9d383c6894b1cafa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // reduxPromise looks at the payload, if its a Promise it will stops the action
  // wait for the promise to be resolved and then returns the resolved promise.
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
