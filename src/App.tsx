import { useState } from "react"
import { TodoList } from "./data/todos"
import AddToDoForm from "./components/AddToDoForm"
import ToDoList from "./components/ToDoList"

function App() {

  const [todos, setTodos] = useState(TodoList)

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
      id: prevTodos.length + 1,
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
    </main>
  )
}

export default App
