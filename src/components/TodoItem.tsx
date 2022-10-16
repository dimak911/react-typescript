import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <div>
      <input type="checkbox" readOnly checked={completed} />
      {id}. {title}
    </div>
  );
};
