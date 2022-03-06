import React from 'react';

import { TextLabel } from '../Elements';

function RadioInputGroup() {
  return (
    <div className="input-group">
      <TextLabel>Select Tip %</TextLabel>
      <div className="select-group">
        <input type="radio" name="tip" value="5" id="tip5" />
        <label htmlFor="tip5">5%</label>
        <input type="radio" name="tip" value="10" id="tip10" />
        <label htmlFor="tip10">10%</label>
        <input type="radio" name="tip" value="15" id="tip15" />
        <label htmlFor="tip15">15%</label>
        <input type="radio" name="tip" value="25" id="tip25" />
        <label htmlFor="tip25">25%</label>
        <input type="radio" name="tip" value="50" id="tip50" />
        <label htmlFor="tip50">50%</label>
        <input type="radio" name="tip" value="custom" id="customtip" />
        <label htmlFor="customtip">custom</label>
      </div>
    </div>
  );
}

export default RadioInputGroup;
