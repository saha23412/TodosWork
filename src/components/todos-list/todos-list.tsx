import React from 'react'
import { Box, Container, TextField, Button } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { ITodoListProps } from './../../models/interface/todos-list';
import Typography from '@mui/material/Typography';
import TodosListWrapper from '../todos-list-wrapper/todos-list-wrapper';
import './todos-list.css'

const TodosList: React.FC<ITodoListProps> = ({ value, handleAction, todosList, setInputValue, completeIdTodo, removeIdTodo }) => {
    return (
        <Box className='TodosList'>
            <Container>
                <Box className='TodoList-search'>
                    <TextField value={value} onChange={(e) => setInputValue(e.target.value)} id="outlined-basic" size="small" label="Создайте задачу" variant="outlined" />
                    <Button onClick={handleAction} className='TodoList-search-button' variant="contained">Создайте задачу</Button>
                    <CreateOutlinedIcon className='TodoList-search-icon' sx={{ fontSize: 30 }} color="primary" />
                </Box>
                <Box className='TodosList-wrapper'>
                    <TodosListWrapper todos={todosList} rules={true} removeIdTodo={removeIdTodo} completeIdTodo={completeIdTodo}>
                        <Typography className='TodosList-wrapper-title fulfilled'>Выполненные задачи</Typography>
                    </TodosListWrapper>
                    <TodosListWrapper todos={todosList} removeIdTodo={removeIdTodo} completeIdTodo={completeIdTodo}>
                        <Typography className='TodosList-wrapper-title all'>Все задачи</Typography>
                    </TodosListWrapper>
                    <TodosListWrapper todos={todosList} rules={false} removeIdTodo={removeIdTodo} completeIdTodo={completeIdTodo}>
                        <Typography className='TodosList-wrapper-title not-fulfilled'>Нужно выполнить</Typography>
                    </TodosListWrapper>
                </Box>
            </Container>
        </Box>
    )
}

export default TodosList