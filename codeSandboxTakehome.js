import React from 'react';






const App = () => {
  const textToDisplay = 'Loading...';

  return (
    <div>
      <Typewriter text={textToDisplay} />
    </div>
  );
};

export default App;