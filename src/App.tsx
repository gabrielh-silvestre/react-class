import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Button } from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  /* const [estado, setEstado] = useState(valor inicial); */

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  useEffect(() => {
    console.log('Start');
  }, []);
  /* useEffect(função, [array de estados]) */

  return (
    <div>
      <h1>Trem</h1>

      <h2>{counter}</h2>
      <Button
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        text="counter"
        /* trem={10} */
      />

      <div>
        <h2>{name}</h2>
        <input type="text" value={name} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
