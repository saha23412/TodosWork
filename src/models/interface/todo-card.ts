import { Todo } from "../type/todo";

export interface ITodoCardProps {
    todo: Todo,
    completeIdTodo: (id: string) => void,
    removeIdTodo: (id: string) => void,
}