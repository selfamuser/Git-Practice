import { useEffect, useState } from "react";
import "./App.css";
import "./contexts/index.js";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from './components/ThemeBtn'
import { ToDoProvider } from "./contexts/index.js";
import {ToDoForm,ToDoItem} from './components/index.js'
function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );

    /*

    prev.map(each value) =>{
      if(each value id  === id)
    }
     */
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(()=>{
    const todos =JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)

    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <ToDoProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >

      <div className="bg-[#617da3] min-h-screen py-8 dark:bg-[#113669]">
     
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black dark:text-blue-400">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos 
            <div className="flex justify-end flex-row"><ThemeBtn></ThemeBtn></div>
          </h1>
          
          <div className="mb-4">{/* Todo form goes here */}
          <ToDoForm></ToDoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
    </ThemeProvider>
  );
}

export default App;
