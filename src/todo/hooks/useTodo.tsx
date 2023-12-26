import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodo = () => {
    return useContext(TodoContext);
}