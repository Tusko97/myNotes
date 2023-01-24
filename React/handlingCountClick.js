// Handling count click
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  // a variable that changes! we want to use state.
  const [count, setCount] = useState(0)
  
  
  function handleCountClick() {
    setCount(count + 1)
    setCount(count + 1)
  }
  
  console.log("In component: ", count)
  
  return (
    <div>
      <button onClick={handleCountClick}>Clicks: {count}</button>
    </div>
  )
}