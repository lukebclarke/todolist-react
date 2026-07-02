import type { ToDo } from "../types/todo";

interface ToDoSummaryProps {
    todos: ToDo[];
    deleteAllCompleted: () => void;
}

export default function ToDoSummary({todos, deleteAllCompleted}: ToDoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} ToDos Completed
            </p>
            {completedTodos.length > 0 && (
                <button
                className="text-red-500 hover:underline text-sm font-medium"
                onClick={deleteAllCompleted}>
                    Delete all completed tasks...
                </button>
            )}
        </div>

    )
}