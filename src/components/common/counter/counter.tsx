import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => parseFloat((prevCount + 0.1).toFixed(1)));
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => parseFloat((prevCount - 0.1).toFixed(1)));
    }
  };

  return (
    <div className="flex gap-2">
      <div className="text-xl">
        <button onClick={decrement} disabled={count === 0.5} className="hover:bg-gray-50 hover:rounded-full px-2">-</button>
      </div>
      <div className="text-lg">{count.toFixed(1)}</div>
      <div className="text-xl">
        <button onClick={increment} className="hover:bg-gray-50 hover:rounded-full px-2">+</button>
      </div>
    </div>
  );
};

export default Counter;

