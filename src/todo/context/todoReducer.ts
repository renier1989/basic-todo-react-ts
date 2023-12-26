import { ITodo, ITodoState } from "../interfaces/interfaces";

// aqui se definen las accion que va a disparar el reducer con su tipado
type TodoAction =
  | { type: "addTodo"; payload: ITodo } // este action espera en el payload un todo complto
  | { type: "toggleTodo"; payload: { id: string } }; // este action espara un id de un todo

export const todoReducer = (state: ITodoState, action: TodoAction):ITodoState => {
  switch (action.type) {
    case "addTodo":
      //no podemos mutar el state directamente. por eso tomamos una copia del ...state
      // luego asignamos el nuevo todo , tomando tambien todos los anteriores
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "toggleTodo":
      console.log(action.payload);
      
      return state;

    default:
      return state;
  }
};
