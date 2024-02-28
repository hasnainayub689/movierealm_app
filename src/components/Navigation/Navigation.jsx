import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation() {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className=" flex h-20 justify-between ml-[240px] ">
                    <IconButton
                        color="inherit"
                        sx={{ display: { xl: 'none' } }}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            ;
        </>
    );
}

export default Navigation;
