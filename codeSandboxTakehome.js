import React, { useState, useEffect } from "react";


export default function App() {
  //sets page to display 'Loading...' on render and while fetch is ongoing
  const [fetchedData, setFetchedData] = useState("Loading...");
  //helper func, pass in response of the fetch call as a string 
  //below inside the main use effect
  const addListItems = (inputStr) => {
    // sets state with list items
    const newList = [];

    //helper func for delay
    const addWithDelay = (i) => {
      setTimeout(() => {
        newList.push(<li key={i}>{inputStr[i]}</li>);
        setFetchedData([...newList]);
        //half second delay for timewriter effect
      }, 500 * i);
    };
    //invokes delay helper func
    for (let i = 0; i < inputStr.length; i++) {
      addWithDelay(i);
    }
  };

  useEffect(() => {
    // Function to fetch the URL data
    const fetchData = async () => {
      try {
        const response = await fetch(
          ""
        );
        //converts response promise to a string
        const data = await response.text();
        //invokes helper func to modify the state
        addListItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchedData("Error fetching data");
      }
    };
    //invokes fetch
    fetchData();
    //runs only once on page render
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>{fetchedData}</h2>
    </div>
  );
}
  //SCRIPT USED FOR STEP 2
//---------------------------------------------------------------------
// function extractValuesFromSpecificTags() {
//   const validCharacters = [];
//   const codeElements = document.getElementsByTagName('code');

//   for (let codeElement of codeElements) {
//     const divElement = codeElement.querySelector('div');
//     if (divElement) {
//       const spanElement = divElement.querySelector('span');
//       if (spanElement) {
//         const charElement = spanElement.querySelector('i.char');
//         if (charElement) {
//           const character = charElement.getAttribute('value');
//           validCharacters.push(character);
//         }
//       }
//     }
//   }

//   const url = validCharacters.join('');
//   return url;
// }
// const extractedURL = extractValuesFromSpecificTags();
// console.log(extractedURL);
//----------------------------------------------------------------------
