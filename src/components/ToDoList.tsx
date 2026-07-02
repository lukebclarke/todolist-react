import type { ToDo } from "../types/todo";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
    todos: ToDo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ToDoList({todos, onCompletedChange, onDelete}: ToDoListProps) {
    return (
        <div className="space-y-2">
          {
            todos.map(todo => (
              <ToDoItem 
              key={todo.id}
              todo={todo} 
              onCompletedChange={onCompletedChange}/>
            ))
          }
        </div>
    )
}