import { useTodo } from "../hooks/useTodo"

export const TitleTodos = () => {
    const { pendingTodos } = useTodo()
    return (
        <>
            <h2 className="text-4xl ">Todos: {pendingTodos} </h2>
        </>
    )
}
