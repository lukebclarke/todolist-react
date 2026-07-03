import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";
import ToDoSummary from "../components/ToDoSummary";
import type { ToDo } from "../types/todo";

//TODO: Use contexts instead to avoid passing everything
interface TasksProps {
    todos: ToDo[];
    setToDoCompleted: (id: number, completed: boolean) => void;
    addToDo: (title: string, scheduled: string) => void;
    removeToDo: (id: number) => void;
    deleteAllCompleted: () => void;
}

export default function Tasks({todos, setToDoCompleted, addToDo, removeToDo, deleteAllCompleted}: TasksProps) {
    return (
        <>
        <h1 className="font-bold pt-10 text-3xl text-center">
        Your Tasks
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
        </>
    )

}