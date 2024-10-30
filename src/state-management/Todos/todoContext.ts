import { Dispatch } from "react";
import { Todo, TodoAction } from "./TodoProvider";
import React from "react";



interface TodoContextType {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>
}

const TodoContext = React.createContext<TodoContextType>({} as TodoContextType)


export default TodoContext