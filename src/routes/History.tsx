import ToDoHistory from "../components/ToDoHistory";
import type { ToDo } from "../types/todo";

interface HistoryProps {
    todos: ToDo[],
    setToDoCompleted: (id: number, completed: boolean) => void;
    removeToDo: (id: number) => void;
}

export default function History({todos, setToDoCompleted, removeToDo}: HistoryProps) {
    return (
         <>
        <h1 className="font-bold pt-10 text-3xl text-center">
        Task History
        </h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
            <ToDoHistory    
            todos={todos}
            onCompletedChange={setToDoCompleted}
            onDelete={removeToDo}
            />
        </div>
        </>
    )
}