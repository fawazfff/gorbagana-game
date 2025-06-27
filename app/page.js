'use client';

import { useState } from 'react';

export default function Home() {
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [message, setMessage] = useState('Click the button 10 times as fast as you can!');

  const handleClick = () => {
    if (score === 0) {
      setStartTime(Date.now());
    }

    const newScore = score + 1;
    setScore(newScore);

    if (newScore === 10) {
      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
      setMessage(`🎉 You clicked 10 times in ${timeTaken} seconds!`);
      setScore(0);
      setStartTime(null);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center space-y-6 p-6">
      <h1 className="text-2xl font-bold">{message}</h1>
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md"
      >
        Click Me! ({score}/10)
      </button>
    </main>
  );
}
