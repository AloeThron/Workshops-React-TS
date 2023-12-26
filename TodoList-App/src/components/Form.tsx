import React, { useRef } from "react";

type Props = {
  addItem: (title: string) => void;
};

export default function Form({addItem}: Props) {

  const inputRef = useRef<HTMLInputElement>(null);

  function saveData(e: React.FormEvent) {
    e.preventDefault();
    const title = inputRef.current!.value;
    addItem(title);
    inputRef.current!.value = "";
  }

  return (
    <form onSubmit={saveData}>
      <input type="text" placeholder="Add Task" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}
