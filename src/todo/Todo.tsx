import { TitleTodos } from "./components/TitleTodos"
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
      <TitleTodos />
      <TodoList />
    </TodoProvider>
  )
}
