import AddToDoForm from "./components/AddToDoForm"
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList"
import ToDoSummary from "./components/ToDoSummary"
import useToDos from "./hooks/useToDo"

function App() {
  const {
    todos,
    setToDoCompleted,
    addToDo,
    removeToDo,
    deleteAllCompleted
  } = useToDos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <Navbar/>
      <h1 className="font-bold pt-20 text-3xl text-center">
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
