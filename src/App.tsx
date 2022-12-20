import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./Button";
import "./App.css";

type ToDoItem = {
  id: number;
  title: string;
  done: boolean;
};

/* const initialList = [
  {
    id: 0,
    title: "Fazer café",
    done: false,
  },
  {
    id: 1,
    title: "Beber café",
    done: false,
  },
];
 */

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
  /* const [toDoTitle, setToDoTitle] = useState<string>(""); */

  const handleToggleDone = (id: number) => {
    const newToDoList = toDoList.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setToDoList(newToDoList);
  };

  const addNewItem = () => {
    const newItem: ToDoItem = {
      id: Math.max(...toDoList.map((item) => item.id)) + 1 || 0,
      title: toDoTitle,
      done: false,
    };

    setToDoList([...toDoList, newItem]);
    setToDoTitle("");
  };

  const removeItem = (id: number) => {
    const listWithoutItem = toDoList.filter((item) => item.id !== id);

    setToDoList(listWithoutItem);
  };

  useEffect(() => {
    const strList = JSON.stringify(toDoList);

    localStorage.setItem("toDoList", strList);
  }, [toDoList]);

/*
  useEffect(() => {
    const strList = localStorage.getItem("toDoList");

    if (strList) {
      const list: ToDoItem[] = JSON.parse(strList);

      setToDoList(list);
    }
  }, []);
*/

  /* - To Do List functions - */

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

      <div>
        <h2>To Do List</h2>

        <input
          type="text"
          value={toDoTitle}
          onChange={(event) => {
            setToDoTitle(event.target.value);
          }}
        />

        <Button onClick={addNewItem} text="Add" />

        {toDoList.map((toDoItem) => (
          <div className="list-items" key={toDoItem.id}>
            {/* <></> */}
            <li onClick={() => handleToggleDone(toDoItem.id)}>
              {toDoItem.title}
              {/* {toDoItem.done ? " - Done" : null} */}
              {toDoItem.done && " - Done"}
            </li>
            <Button onClick={() => removeItem(toDoItem.id)} text="Remove" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
