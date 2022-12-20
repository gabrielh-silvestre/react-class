import { useState } from "react";
import { ToDoItem as ToDoItemProps } from "../App";

export function ToDoItem({ title, done }: ToDoItemProps) {
  const [isDone, setIsDone] = useState(done);

  return (
    <>
      <div onClick={() => setIsDone((prevValue) => !prevValue)}>
        <h3>{title}</h3>
        {isDone ? <p> - Done</p> : null}
      </div>
    </>
  );
}
