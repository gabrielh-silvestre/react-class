import { ChangeEvent, useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  /* const [estado, setEstado] = useState(valor inicial); */

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div>
      <h1>Trem</h1>

      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        counter
      </button>

      <div>
        <h2>{name}</h2>
        <input type="text" value={name} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
