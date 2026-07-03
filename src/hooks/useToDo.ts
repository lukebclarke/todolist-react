import { useEffect, useState } from "react";
import type { ToDo } from "../types/todo";
import { TodoList } from "../data/todos";

export default function useToDos() {

    const [todos, setTodos] = useState(() => {
    const savedTodos: ToDo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0 ? savedTodos : TodoList
    });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
        prevTodos.map((todo) => (
        todo.id === id ? {...todo, completed} : todo)
        )
    )
    }

    function addToDo(title: string, scheduled: string) {
    setTodos((prevTodos) => [
    {
        id: Date.now(),
        title,
        completed: false,
        show: true,
        scheduled: scheduled
    },
    ...prevTodos
    ])

    }

    function removeToDo(id: number) {
    setTodos((prevTodos) => 
        prevTodos.filter(todo => todo.id !== id)
    )
    }

    function deleteAllCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
    }

    return {
        todos,
        setToDoCompleted,
        addToDo,
        removeToDo,
        deleteAllCompleted
    }

}