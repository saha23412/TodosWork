import { Todo } from "../type/todo";

export interface ITodoListWrapperProps {
    todos: Todo[],
    rules?: boolean,
    children: React.ReactNode,
    completeIdTodo: (id: string) => void,
    removeIdTodo: (id: string) => void,
}