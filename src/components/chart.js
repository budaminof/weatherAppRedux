// if you find yourself rewriting lines of code its a sign to make it into a new
// component.  In this case its component because it doesnt care
// about the state of the app. and its functional because it doesnt care about
// the state of itself.

import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
