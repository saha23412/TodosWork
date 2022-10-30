import React from 'react'
import { TodoCardProps } from '../../models/interface/todo-card'
import { Box, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GradingIcon from '@mui/icons-material/Grading';
import ClearIcon from '@mui/icons-material/Clear';
import MotionLayout from '../motion-layout/motion-layout';
import './todo-card.css'

const TodoCard: React.FC<TodoCardProps> = ({ todo, completeIdTodo, removeIdTodo }) => {
    return (
        <MotionLayout key={todo.id}>
            <Box className='TodoCard-wrapper'>
                <Box className='TodoCard-wrapper-box'>
                    {
                        todo.completed
                            ? <ClearIcon className='TodoCard-icon' onClick={() => completeIdTodo(todo.id)} />
                            : <GradingIcon className='TodoCard-icon' onClick={() => completeIdTodo(todo.id)} />
                    }
                    <Alert severity={todo.completed ? 'success' : 'error'}>
                        <Box className='TodoCard-title'>
                            {todo.title}
                        </Box>
                    </Alert>
                    <DeleteIcon onClick={() => removeIdTodo(todo.id)} className='TodoCard-icon' />
                </Box>
            </Box>
        </MotionLayout>


    )
}

export default TodoCard