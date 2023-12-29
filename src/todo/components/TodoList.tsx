import { useTodo } from "../hooks/useTodo"
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const { todos } = useTodo();

    return (
        <>
        <div className="text-center flex flex-col gap-3">
            <div className="text-3xl">Lista de todos:</div>
            <ul className="flex flex-col">
                {todos.map(todo=> <TodoItem key={todo.id} todo={todo}/> )}
            </ul>
        </div>
        </>
    )
}
