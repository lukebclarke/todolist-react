import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import useToDos from "./hooks/useToDo"
import Tasks from "./routes/Tasks";
import History from "./routes/History";
import Calendar from "./routes/Calendar";

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
      <Routes>
        <Route path="/" element={<Tasks todos={todos} setToDoCompleted={setToDoCompleted} addToDo={addToDo} removeToDo={removeToDo} deleteAllCompleted={deleteAllCompleted}/>}/>
        <Route path="/history" element={<History todos={todos} setToDoCompleted={setToDoCompleted} removeToDo={removeToDo}/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </main>
  )
}

export default App
