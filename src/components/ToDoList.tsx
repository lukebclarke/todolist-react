import type { ToDo } from "../types/todo";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
    todos: ToDo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ToDoList({todos, onCompletedChange, onDelete}: ToDoListProps) {
    const todosSorted = todos.sort((a,b) => {
        if (a.completed === b.completed) {
            return b.id - a.id
        }
        return a.completed ? 1: -1
    })

    return (
        <>
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
        {todos.length === 0 && (
            <p className="text-gray-500 text-center text-sm">
                No tasks added yet. Add one to get started...
            </p>
        )}
        </>
    )
}