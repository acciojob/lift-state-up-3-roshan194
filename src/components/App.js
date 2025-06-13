
import React from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import { useState } from "react";

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Selected Option: {selectedOption || "None"}</h1>

      <ChildComponent1 onSelect={handleOptionChange} />
      <ChildComponent2 onSelect={handleOptionChange} />
    </div>
  );
};

export default App;
