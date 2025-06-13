// ChildComponent1.js
import React from 'react';

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect('Option 1')}>Select Option 1</button>
    </div>
  );
};

export default ChildComponent1;
