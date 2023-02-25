import './Slyder4.css'

import React, { useState } from 'react';
function RangeSlider() {
  const [sliderValue, setSliderValue] = useState(100);
  const [sliderValueStyle, setSliderValueStyle] = useState({});
  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
    setSliderValueStyle({ left: `${value / 2}%` });
  };
  const handleSliderBlur = () => {
    setSliderValueStyle({});
  };
  return (
    <div className="range">
      <div className="sliderValue" style={sliderValueStyle}>
        <span>{sliderValue}</span>
      </div>
      <div className="field">
        <div className="value left">0</div>
        <input type="range" min="0" max="200" value={sliderValue} step="1" onChange={handleSliderChange} onBlur={handleSliderBlur} />
        <div className="value right">200</div>
      </div>
    </div>
  );
}
export default RangeSlider;