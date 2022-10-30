import { Action } from '../models/type/action';
import { Todo } from '../models/type/todo';
import todoReducer, {
    addTodo, completeTodo, removeTodo
} from '../store/slice/todoSlice'
describe('todoSlice', () => {
    it('should return default state when passed an empty action', () => {
        const result = todoReducer(undefined, { type: '' });
        expect(result).toEqual({ "list": [] })
    });
    it('should add new todo item with addTodo action', () => {
        const action: Action = { type: addTodo.type, payload: 'test' }
        const result = todoReducer({ "list": [] }, action)
        expect(result.list[0].title).toBe('test')
        expect(result.list[0].completed).toBe(false)
    })
    it('should completed status with completeTodo action', () => {
        const todos: Todo[] = [{ id: '123', title: 'work', completed: false }]
        const action: Action = { type: completeTodo.type, payload: '123' }
        const result = todoReducer({ "list": todos }, action)
        expect(result.list[0].completed).toBe(true)
    })
    it('should remove todo by id with removeTodo action', () => {
        const todos: Todo[] = [{ id: '1234', title: 'work', completed: false }]
        const action: Action = { type: removeTodo.type, payload: '1234' }
        const result = todoReducer({ "list": todos }, action)
        expect(result.list.length).toBe(0)
    })
});