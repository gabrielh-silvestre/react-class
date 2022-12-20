import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./Button";
import "./App.css";
import { AddItemButton } from "./buttons/AddItemButton";
import { RemoveItemButton } from "./buttons/RemoveItemButton";
import { ToDoItem } from "./item/ToDoItem";

export type ToDoItem = {
  id: number;
  title: string;
  done: boolean;
};

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  /* const [estado, setEstado] = useState(valor inicial); */

  /* const [toDoList, setToDoList] = useState<ToDoItem[]>(initialList); */
  const [toDoList, setToDoList] = useState<ToDoItem[]>(() => {
    const strList = localStorage.getItem("toDoList");

    if (strList) {
      const list: ToDoItem[] = JSON.parse(strList);
      return list;
    }

    return [];
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  useEffect(() => {
    console.log("Start");
  }, []);
  /* useEffect(função, [array de estados]) */

  /* - To Do List functions - */

  const [toDoTitle, setToDoTitle] = useState("");

  useEffect(() => {
    const strList = JSON.stringify(toDoList);

    localStorage.setItem("toDoList", strList);
  }, [toDoList]);

  /* - To Do List functions - */

  return (
    <div>
      <h1>Trem</h1>

      <h2>{counter}</h2>
      <Button
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        text="counter"
      />

      <div>
        <h2>{name}</h2>
        <input type="text" value={name} onChange={handleChange} />
      </div>

      <div>
        <h2>To Do List</h2>

        <input
          type="text"
          value={toDoTitle}
          onChange={(event) => {
            setToDoTitle(event.target.value);
          }}
        />

        <AddItemButton
          list={toDoList}
          setList={setToDoList}
          title={toDoTitle}
        />

        {toDoList.map((toDoItem) => (
          <div className="list-items" key={toDoItem.id}>
            <ToDoItem {...toDoItem} />
            <RemoveItemButton
              id={toDoItem.id}
              list={toDoList}
              setList={setToDoList}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
