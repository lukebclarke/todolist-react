import type { ToDo } from "../types/todo";
import ToDoItem from "./ToDoItem";

interface ToDoHistoryProps {
    todos: ToDo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ToDoHistory({todos, onCompletedChange, onDelete}: ToDoHistoryProps) {
    const completedTodos = todos.filter(
        todo => todo.completed == true
    )

    const todosSorted = completedTodos.sort((a,b) => {
        if (a.completed === b.completed) {
            return b.id - a.id
        }
        return a.completed ? 1: -1
    })

    return (
        <>
        {completedTodos.length === 0 ? (
            <p className="text-gray-500 text-center text-sm">
                No tasks completed yet...
            </p>
        ) : (
        <div className="space-y-2">
            {
                todosSorted.map(todo => (
                <ToDoItem 
                key={todo.id}
                todo={todo} 
                onCompletedChange={onCompletedChange}
                onDelete={onDelete}/>
                ))
            }
        </div>
        )}
        </>
    )
}