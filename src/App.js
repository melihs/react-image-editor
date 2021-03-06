import React, { useState } from "react";
import Slider from "./components/Slider/slider";
import SidebarItem from "./components/SidebarItem/sidebarItem";
import "./App.scss";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "GrayScale",
    property: "grayScale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  // {
  //   name: "Hue Rotate",
  //   property: "huı-rotate",
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 360,
  //   },
  //   unit: "deg",
  // },
  // {
  //   name: "Blur",
  //   property: "blur",
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 20,
  //   },
  //   unit: "px",
  // },
];

const App = () => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectOptionIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  };

  const getImageStyle = () => {
    const filters = options.map((option, index) => {
      return `${option.property}(${option.value}${option.unit})`; 
    });

    return {filter: filters.join(' ') }
  }
  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}/>
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectOptionIndex(index)}
            />
          );
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
};

export default App;
