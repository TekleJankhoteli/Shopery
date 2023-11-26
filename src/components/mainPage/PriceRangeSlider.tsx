import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange: (newValue: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, onChange }) => {
  const [value, setValue] = useState<[number, number]>([min, max]);

  const handleSliderChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue as [number, number]);
      onChange(newValue as [number, number]);
    }
  };

  const trackStyle = [
    { backgroundColor: '	#32CD32' }, 
  ];

  const handleStyle = [
    { backgroundColor: 'white', borderColor: '	#32CD32'}, 
    
  ];
  const containerStyle = {
    width: "230px"
   
  };


  return (
    <div style={containerStyle}>
      <Slider
        range
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
        trackStyle={trackStyle}
        handleStyle={handleStyle}

      />
      <div>
        Price Range: ${value[0]} - ${value[1]}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
