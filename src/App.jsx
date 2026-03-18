import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter-div">
        <h1>Counter</h1>
        <p>{count}</p>
        <div className="button-div">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button
            onClick={() => {
              count > 0 && setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
