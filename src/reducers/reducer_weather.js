import { FETCH_WEATHER } from '../actions/index';

export default function (state= [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // DON'T mutate state, we want to returning a new state. new reference not mutating.
    // DON'T state.push( action.payload.data );
    // return state.concat([ action.payload.data ]); // same as:
      return [ action.payload.data, ...state ]
  }
  return state;
}
