import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
    <div className="text-5xl">Todo:</div>

    <TodoList/>

    
    </TodoProvider>
  )
}
