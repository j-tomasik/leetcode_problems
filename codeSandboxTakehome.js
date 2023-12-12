import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500); // Adjust the delay here (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div>
      <h1>Typewriter Effect</h1>
      <p>{displayedText}</p>
    </div>
  );
};




const App = () => {
  const textToDisplay = 'Loading...';

  return (
    <div>
      <Typewriter text={textToDisplay} />
    </div>
  );
};

export default App;