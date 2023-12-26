import { createContext } from "react";
import { ITodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState : ITodoState;
    toggleTodo : (id:string)=>void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);