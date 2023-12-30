'use client';

import React, { useState } from "react";

interface CounterProps {
  measuringUnit: string;
}

const Counter: React.FC<CounterProps> = ({ measuringUnit }) => {
  const initialCount = measuringUnit === "kg" ? 0.5 : 1;
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    const step = measuringUnit === "kg" ? 0.1 : 1;
    const newCount = count + step;
    if (measuringUnit === "kg" && newCount >= 0.5) {
      setCount(parseFloat(newCount.toFixed(1)));
    } else if (measuringUnit === "unit" && newCount >= 1) {
      setCount(Math.floor(newCount));
    }
  };

  const decrement = () => {
    const step = measuringUnit === "kg" ? 0.1 : 1;
    const newCount = count - step;
    if (measuringUnit === "kg" && newCount >= 0.5) {
      setCount(parseFloat(newCount.toFixed(1)));
    } else if (measuringUnit === "unit" && newCount >= 1) {
      setCount(Math.floor(newCount));
    }
  };

  return (
    <div className="flex gap-2">
      <div className="text-xl">
        <button
          onClick={decrement}
          disabled={(measuringUnit === "kg" && count === 0.5) || (measuringUnit === "unit" && count === 1)}
          className="hover:bg-gray-50 hover:rounded-full px-2"
        >
          -
        </button>
      </div>
      <div className="text-lg">{count}</div>
      <div className="text-xl">
        <button
          onClick={increment}
          className="hover:bg-gray-50 hover:rounded-full px-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
