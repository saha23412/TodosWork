import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './title-app-bar.css'

const TitleAppBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='TitleAppBar' position="static">
                <Toolbar>
                    <Box className='TitleAppBar-wrapper'>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Список задач
                        </Typography>
                        <ListAltIcon className='TitleAppBar-wrapper-icon' />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TitleAppBar