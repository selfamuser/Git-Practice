import { useContext,createContext } from "react";
export const ToDoContext = createContext({
    todos : [
        {
            id:1,
            todo : "Todo Message",
            completed: false,
        }
    ],
    addToDo : (todo)=>{},
    deleteToDo : (id) => {},
    updateToDo : (id,todo) => {},
    toggleComplete : (id) => {}
})



export const useToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider