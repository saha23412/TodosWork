import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoState } from '../../models/type/todo'
const initialState: TodoState = {
    list: [],
}
const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },
        completeTodo(state, action: PayloadAction<string>) {
            const completeTodo = state.list.find(todo => todo.id === action.payload)
            if (completeTodo) completeTodo.completed = !completeTodo.completed
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        }
    }
})
export const { addTodo, completeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;