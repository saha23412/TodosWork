import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/hook';
import { addTodo, completeTodo, removeTodo } from './store/slice/todoSlice';
import InputAppBar from './components/title-app-bar/title-app-bar'
import TodosList from './components/todos-list/todos-list';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState<string>('')
  const selectRedux = useAppSelector(state => ({
    todosList: state.todos.list
  }))
  const completeIdTodo = (id: string): void => {
    dispatch(completeTodo(id))
  }
  const removeIdTodo = (id: string): void => {
    dispatch(removeTodo(id))
  }
  const handleAction = (): void => {
    if (/\S/.test(inputValue)) {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  return (
    <>
      <InputAppBar />
      <TodosList
        removeIdTodo={removeIdTodo}
        completeIdTodo={completeIdTodo}
        setInputValue={setInputValue}
        value={inputValue}
        handleAction={handleAction}
        todosList={selectRedux.todosList}
      />
    </>
  );
}

export default App;
