import "./styles.css";
import React, { useState, useEffect } from 'react';

export default function App() {
  const [fetchedData, setFetchedData] = useState('Loading...');

  const addListItemsWithDelay = (inputStr) => {
    const newList = []
    
    for (let i = 0; i < inputStr.length; i++) {
      setTimeout(() => {
        newList.push(<li key={i}>{inputStr[i]}</li>)
        setFetchedData([...newList])
      }, 1000 * 1);
    };
  };

  useEffect(() => {
    // Function to fetch the URL data
    const fetchData = async () => {
      try {
        const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/68616e'); 
        const data = await response.text();
        
        addListItemsWithDelay(data)
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchedData('Error fetching data');
      }
    };

    fetchData(); 
  }, []);


 
  return (
    <div className="App">
      <h1>Hello Ramp!</h1>
      <h2>{fetchedData}</h2>
    </div>
  );
}