import "./App.css";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const handleClick = (e) => {
    if (e === "sub") {
      setNumber(number - 1);
    } else if (e === "reset") {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };
  return (
    <section className="counter-sec">
      <div className="counter">
        <h1>React Counter App</h1>
        <p>{number}</p>
        <div className="btns">
          <button onClick={() => handleClick("sub")}>-subtract</button>
          <button onClick={() => handleClick("reset")}>Reset</button>
          <button onClick={() => handleClick("add")}>+add</button>
        </div>
      </div>
    </section>
  );
}

export default App;
