import { Todo } from "../type/todo";

export interface TodoCardProps {
    todo: Todo,
    completeIdTodo: (id: string) => void,
    removeIdTodo: (id: string) => void,
}