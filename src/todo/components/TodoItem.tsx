import { useTodo } from '../hooks/useTodo';
import { ITodo } from '../interfaces/interfaces';

interface props {
    todo : ITodo;
}

export const TodoItem = ({todo}:props) => {

    const {toggleTodo} = useTodo()

    const handleDoubleClick = () =>{
        toggleTodo(todo.id)
    }
  return (
    <li  className={` ${todo.completed ? 'line-through opacity-60':''} cursor-pointer border p-1 my-1 hover:bg-stone-700/50 `}
    onDoubleClick={handleDoubleClick}>
        {todo.desc}
    </li>
  )
}
