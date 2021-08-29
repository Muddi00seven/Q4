import react, { useState, useContext } from 'react';
import Child from './child';
import { GlobalContext } from './contextState/globalState';
function App() {
  const [value, setValue] = useState(0);
  const { state, increment, decrement, multiply, divide } = useContext(GlobalContext)

  console.log("value", value);
  console.log("value", typeof value);

  return (
    <div className="App">
      <h1>App Component</h1>
      <h1>{state}</h1>
      <br />
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => multiply()}>Multiply</button>
      <button onClick={() => divide()}>Divide</button>
      <br />
      <br />
      <Child />
    </div>
  );
}

export default App;
