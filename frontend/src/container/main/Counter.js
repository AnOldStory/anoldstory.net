import React, { useState, useEffect } from "react";

const Counter = ({ msg }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("effect start11" + value);
    return () => {
      console.log("effect end" + value);
    };
    
  }, [value]);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h1>
        Hello {msg} this is value {value}
      </h1>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={() => setValue(value + 1)}>Click</button>
    </div>
  );
};

export default Counter;
