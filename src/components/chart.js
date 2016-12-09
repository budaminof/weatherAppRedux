// if you find yourself rewriting lines of code its a sign to make it into a new
// component.  In this case its component because it doesnt care
// about the state of the app. and its functional because it doesnt care about
// the state of itself.

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={ props.data }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type='avg'/>
      </Sparklines>
      <div>{ average(props.data) } {props.units}</div>
    </div>
  );
}
