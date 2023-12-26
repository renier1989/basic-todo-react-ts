import { useReducer } from 'react';
import { ITodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE:ITodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Terminar curso de react con juan',
            completed : false,
        },
        {
            id: '2',
            desc: 'Obtener el certificado gratuito de CertiProf de Scrum',
            completed : false,
        },
    ],
    completed: 0,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }:Props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id:string)=>{
        dispatch({ type: 'toggleTodo', payload:{id}})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}