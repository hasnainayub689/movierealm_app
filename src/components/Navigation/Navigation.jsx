import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Navigation() {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className=" flex h-20 justify-between lg:ml-[240px] md:ml-5 sm:ml-4 ">
                    <IconButton
                        color="inherit"
                        sx={{ display: { xl: 'none' } }}
                        style={{ outline: 'none' }}
                        edge="start"
                        onClick={() => {}}
                        className=" mr-2 sm:ml-0 sm:flex-wrap "
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        color="interit"
                        sx={{ ml: 1 }}
                        onClick={() => {}}
                    >
                        <Brightness4Icon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            ;
        </>
    );
}

export default Navigation;
