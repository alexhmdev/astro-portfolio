import React, { useState } from 'react';

const ReactCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card bg-primary text-base-content w-fit p-4">
      React Counter
      <span className="countdown font-mono text-6xl">
        <span style={{ '--value': count }}></span>
      </span>
      <div className="flex gap-2">
        <button
          className="btn btn-circle"
          onClick={() => setCount((current) => (current += 1))}
        >
          +
        </button>
        <button
          className="btn btn-circle"
          onClick={() => setCount((current) => (current -= 1))}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ReactCounter;
