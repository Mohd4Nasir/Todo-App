import { createContext,useContext } from "react";
export const TodoContext=createContext({
 
    todos:[{
    id:1,
    todoMsg:"Msg",
    completed:false
  }],
  addTodo:()=>{},
  updateTodo:()=>{},
  deleteTodo:()=>{},
  toggleComplete:()=>{}
})
export const Todoprovider=TodoContext.Provider

export   const UseTodo=()=>{
    return useContext(TodoContext)

}
