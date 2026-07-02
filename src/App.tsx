import { useEffect, useState } from "react"
import { TodoList } from "./data/todos"
import AddToDoForm from "./components/AddToDoForm"
import ToDoList from "./components/ToDoList"
import ToDoSummary from "./components/ToDoSummary"
import type { ToDo } from "./types/todo"

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos: ToDo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0 ? savedTodos : TodoList
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (
        todo.id === id ? {...todo, completed} : todo)
      )
  )
  }

  function addToDo(title: string) {
    setTodos((prevTodos) => [
    {
      id: Date.now(),
      title,
      completed: false
    },
    ...prevTodos
    ])

  }

  function removeToDo(id: number) {
    setTodos((prevTodos) => 
      prevTodos.filter(todo => todo.id !== id)
  )
  }

  function deleteAllCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">
        Your ToDos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm onSubmit={addToDo}/>
        <ToDoList 
        todos={todos}
        onCompletedChange={setToDoCompleted}
        onDelete={removeToDo}
        />
      </div>
      <ToDoSummary
      todos={todos}
      deleteAllCompleted={deleteAllCompleted}
      />
    </main>
  )
}

export default App
