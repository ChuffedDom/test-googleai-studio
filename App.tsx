
import React, { useState, useCallback } from 'react';

// Icon components defined outside the main App component to prevent re-creation on re-renders.
const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

const RefreshIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4a12 12 0 0116 16" />
    </svg>
);


const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);
  
  const getCountColor = () => {
    if (count > 0) return 'text-green-400';
    if (count < 0) return 'text-red-400';
    return 'text-gray-300';
  }

  return (
    <main className="bg-slate-900 min-h-screen flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-bold text-center text-white mb-2">Counter</h1>
        <p className="text-center text-gray-400 mb-8">A simple and elegant counter.</p>
        
        <div className={`text-9xl font-mono font-extrabold text-center my-10 transition-colors duration-300 ${getCountColor()}`}>
          {count}
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={decrement}
            aria-label="Decrement count"
            className="group w-20 h-20 flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50"
          >
            <MinusIcon className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12"/>
          </button>

          <button
            onClick={increment}
            aria-label="Increment count"
            className="group w-20 h-20 flex items-center justify-center bg-green-600 hover:bg-green-500 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
          >
            <PlusIcon className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12"/>
          </button>
        </div>
        
        <div className="mt-8 text-center">
            <button
                onClick={reset}
                aria-label="Reset count"
                className="group inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-500 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
            >
                <RefreshIcon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
                Reset
            </button>
        </div>
      </div>
    </main>
  );
};

export default App;
