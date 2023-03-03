import { Trash2 } from "react-feather";
import { Todos } from "@/pages/_app";

type Props = {
  todo: Todos;
  updateTodos: any;
  deleteTodos: any;
};

const TodoItem = ({ todo, updateTodos, deleteTodos }: Props) => {
  const onDeleteTodos = (id: Number) => {
    deleteTodos(id);
  };
  return (
    <section className="flex items-center px-3 w-full bg-gradient-to-r from-fuchsia-500 to-violet-500 h-20 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between w-full gap-5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className=""
            defaultChecked={todo.completed}
            onChange={() => {
              updateTodos({ ...todo, completed: !todo.completed });
            }}
          />
          <h1 className="text-white text-sm">{todo.title}</h1>
        </div>
        <button onClick={() => onDeleteTodos(todo.id)}>
          <Trash2 color="white" size={20} />
        </button>
      </div>
    </section>
  );
};

export default TodoItem;
