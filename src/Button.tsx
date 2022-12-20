import React from 'react'

type ButtonProps = {
  text: string;
  onClick: () => void;
  /* trem: number; */
};

/* export function Button(props: ButtonProps) {
  return (
    <div>{props.text}</div>
  )
} */

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
