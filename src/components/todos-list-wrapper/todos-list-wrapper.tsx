import React from 'react'
import { Box } from '@mui/material';
import { ITodoListWrapperProps } from '../../models/interface/todos-list-wrapper';
import { AnimatePresence } from 'framer-motion';
import TodoCard from '../todo-card/todo-card';
import Typography from '@mui/material/Typography';
import MotionLayout from '../motion-layout/motion-layout';
import './todos-list-wrapper.css'
const TodosListWrapper: React.FC<ITodoListWrapperProps> = ({ todos, rules, children, completeIdTodo, removeIdTodo }) => {
    return (
        <Box className='TodoList-wrapper'>
            {children}

            <AnimatePresence>
                {
                    typeof rules === 'undefined'
                        ? todos.length ? todos.map(todo =>
                            <TodoCard
                                removeIdTodo={removeIdTodo}
                                completeIdTodo={completeIdTodo}
                                key={todo.id}
                                todo={todo} />)

                            :
                            <MotionLayout key='title_all'>
                                <Typography className='TodoList-wrapper-clarification'>Нет задач,вы можете создать их</Typography>
                            </MotionLayout>
                        : todos.filter(todo => todo.completed === rules).length
                            ? todos.filter(todo => todo.completed === rules).map(todo =>
                                <TodoCard
                                    removeIdTodo={removeIdTodo}
                                    completeIdTodo={completeIdTodo}
                                    key={todo.id}
                                    todo={todo} />)
                            : rules
                                ? <MotionLayout key='title_fulfilled'> <Typography className='TodoList-wrapper-clarification'>Нет выполненных задач</Typography></MotionLayout>
                                : <MotionLayout key='title_not-fulfilled'> <Typography className='TodoList-wrapper-clarification'>Нет задач,которые можно выполнить</Typography></MotionLayout>
                }
            </AnimatePresence>

        </Box>
    )
}

export default TodosListWrapper