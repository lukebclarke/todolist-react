import type { ToDo } from "../types/todo"

interface ToDoItemProps {
    todo: ToDo;
}

export default function ToDoItem({todo}: ToDoItemProps) {
    return (
        <div>
            {todo.title}
        </div>
    )
}