import { useState } from "react";

function App() {
  // let counter = 0;  Here comes the hooks to update the UI

  let [counter, setCounter] = useState(0); // counter is variable and setCounter is a function

  const addValue = ()=>{
    // counter = counter + 1;

    setCounter(counter+1);
  }

  const removeValue = ()=>{
    // counter = counter - 1;

    setCounter(counter-1);
  }

  return (
    <>
    <h1>Counter App Example</h1>

    <h3>Counter Value: {counter}</h3>

    <button onClick={addValue}>Add Value</button>

    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
