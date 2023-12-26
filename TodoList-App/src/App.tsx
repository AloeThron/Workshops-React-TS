import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Item from "./models/item";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function genId() {
    return Math.floor(Math.random() * 100);
  }

  function addItem(title: string) {
    setItems([...items, { id: genId(), title: title }]);
  }

  return (
    <>
      <div>
        <Form addItem={addItem} />
        <TaskList items={items} />
      </div>
    </>
  );
}

export default App;
