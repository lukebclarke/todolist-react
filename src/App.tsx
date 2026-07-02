import { useState } from "react"
import ToDoItem from "./components/ToDoItem"
import { TodoList } from "./data/todos"

function App() {

  const [todos, setTodos] = useState(TodoList)

  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (
        todo.id === id ? {...todo, completed} : todo)
      )
  )
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">
        Your ToDos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {
            todos.map(todo => (
              <ToDoItem 
              key={todo.id}
              todo={todo} 
              onCompletedChange={setToDoCompleted}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
