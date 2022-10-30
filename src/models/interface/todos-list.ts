import { Todo } from "../type/todo";

export interface ITodoListProps {
    value: string,
    handleAction: () => void,
    todosList: Todo[],
    setInputValue: (value: string) => void,
    completeIdTodo: (id: string) => void,
    removeIdTodo: (id: string) => void,
}