
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [counter,setCounter] = useState(0)
  const handleCount = ()=>{
    return setCounter(counter+1);
  }
  return (
    <div>
      <p>Button clicked {counter} times</p>
        <button onClick={handleCount}>Click me</button>
    </div>
  )
}

export default App
