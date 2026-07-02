import type { ToDo } from "../types/todo"

interface ToDoItemProps {
    todo: ToDo;
}

export default function ToDoItem({todo}: ToDoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 bg-white hover:bg-slate-50">
                <input
                type="checkbox"
                className="scale-125"
                />
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.title}
            </span>
            </label>

        </div>
    )
}