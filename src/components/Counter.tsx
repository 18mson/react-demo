import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev - 1));

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Counter
      </h2>
      
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-blue-600 mb-2">
          {count}
        </div>
        <p className="text-gray-500 text-sm">
          Current count (cannot go below 0)
        </p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={count === 0}
          className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            count === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600 active:scale-95'
          }`}
        >
          <Minus className="w-5 h-5 mr-2" />
          Decrement
        </button>
        
        <button
          onClick={increment}
          className="flex-1 flex items-center justify-center py-3 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 active:scale-95 transition-all duration-200"
        >
          <Plus className="w-5 h-5 mr-2" />
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;