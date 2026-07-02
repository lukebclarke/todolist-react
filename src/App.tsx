import ToDoItem from "./components/ToDoItem"
import { TodoList } from "./data/todos"

function App() {

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">
        Your ToDos
      </h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {
            TodoList.map(todo => (
              <ToDoItem todo={todo}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
