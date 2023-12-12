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

const URLFetcher = () => {
  const [fetchedData, setFetchedData] = useState('');

  useEffect(() => {
    // Function to fetch the URL data
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_URL_HERE'); // Replace 'YOUR_URL_HERE' with the fetched URL
        const data = await response.text();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchedData('Error fetching data');
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <ul></ul>
      <p>{fetchedData}</p>
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