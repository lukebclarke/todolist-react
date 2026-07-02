import ToDoItem from "./components/ToDoItem"
import { TodoList } from "./data/todos"

function App() {

  function setToDoCompleted(id: number, completed: boolean) {
    alert(`todo with ${id} is now ${completed ? "completed" : "not completed"}`)
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">
        Your ToDos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {
            TodoList.map(todo => (
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
