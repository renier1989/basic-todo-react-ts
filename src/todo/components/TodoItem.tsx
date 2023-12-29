import { useTodo } from '../hooks/useTodo';
import { ITodo } from '../interfaces/interfaces';

interface props {
  todo: ITodo;
}

export const TodoItem = ({ todo }: props) => {

  const { toggleTodo } = useTodo()
  return (
    <li className={` ${todo.completed ? 'line-through opacity-60' : ''} cursor-pointer border p-1 my-1 hover:bg-stone-700/50 `}
      onDoubleClick={() => toggleTodo(todo.id)}>
      {todo.desc}
    </li>
  )
}
