import Task from "./Task";
import Item from "../models/item";

type Props = {
  items: Item[];
};

export default function TaskList({ items }: Props) {
  return (
    <div>
      {items.map((item) => (
        <Task key={item.id} title={item.title} />
      ))}
    </div>
  );
}
