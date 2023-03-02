import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
export default function MainLayout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <h1>Octopus</h1>
            <Outlet />
        </Box>
    );
}
