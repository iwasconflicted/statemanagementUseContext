import { ReactNode, useReducer } from "react"
import TodoContext from "./todoContext";

export interface Todo {
    id: number;
    title:string;
}

interface AddTodo {
    type: 'ADD';
    todo: Todo;
}

interface DeleteTodo {
    type: 'DELETE';
    todoId:number;
}

export type TodoAction = AddTodo | DeleteTodo;

const todoReducer = (todos:Todo[], action:TodoAction): Todo[] => {
    switch(action.type) {
        case 'ADD':
            return [action.todo, ...todos];

        case 'DELETE':
            return todos.filter((t) => t.id !== action.todoId )    
    }
}

interface Props {
    children: ReactNode;
}


const TodoProvider = ({children}: Props) => {

    const [todos,dispatch] = useReducer(todoReducer,[])


    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider